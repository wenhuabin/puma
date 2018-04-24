import 'scss/list.scss';
import * as styles from 'react-virtualized/styles.css'
import {Component} from 'react';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/List';
import {List as IList} from 'immutable';

class VList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: this._renderList(),
            listHeight: 300,
            listRowHeight: 50,
            overscanRowCount: 10,
            rowCount: 20,
            scrollToIndex: undefined,
            showScrollingPlaceholder: false,
            useDynamicRowHeight: false,
        };
        this._getRowHeight = this._getRowHeight.bind(this);
        this._noRowsRenderer = this._noRowsRenderer.bind(this);
        this._onRowCountChange = this._onRowCountChange.bind(this);
        this._onScrollToRowChange = this._onScrollToRowChange.bind(this);
        this._rowRenderer = this._rowRenderer.bind(this);
        this._renderList = this._renderList.bind(this);
    }

    mounted(){
        this._renderList();
    }

    _renderList(){
        let list = IList([]);
        for(let i=0; i<20; i++){
            //return new list every push
            list = list.push({color: 'red', size: 34, name: `第 ${i} 个人`});
        }
        return list;
    }

    _getDatum(index) {
        const list = this.state.list;
        console.log(list);
        return list.get(index % list.size);
    }

    _getRowHeight({index}) {
        return this._getDatum(index).size;
    }

    _noRowsRenderer() {
        return <div className={styles.noRows}>No rows</div>;
    }

    _onRowCountChange(event) {
        const rowCount = parseInt(event.target.value, 10) || 0;

        this.setState({rowCount});
    }

    _onScrollToRowChange(event) {
        const {rowCount} = this.state;
        let scrollToIndex = Math.min(
          rowCount - 1,
          parseInt(event.target.value, 10),
        );

        if (isNaN(scrollToIndex)) {
          scrollToIndex = undefined;
        }

        this.setState({scrollToIndex});
    }

    _rowRenderer({index, isScrolling, key, style}) {
        const {showScrollingPlaceholder, useDynamicRowHeight} = this.state;

        if (showScrollingPlaceholder && isScrolling) {
          return (
            <div
              className={cn(styles.row, styles.isScrollingPlaceholder)}
              key={key}
              style={style}>
              Scrolling...
            </div>
          );
        }

        const datum = this._getDatum(index);

        let additionalContent;

        if (useDynamicRowHeight) {
          switch (datum.size) {
            case 75:
              additionalContent = <div>It is medium-sized.</div>;
              break;
            case 100:
              additionalContent = (
                <div>
                  It is large-sized.<br />It has a 3rd row.
                </div>
              );
              break;
          }
        }

        return (
          <div className={styles.row} key={key} style={style}>
            <div
              className={styles.letter}
              style={{
                backgroundColor: datum.color,
              }}>
              {datum.name[0]}
            </div>
            <div>
              <div className={styles.name}>{datum.name}</div>
              <div className={styles.index}>This is row {index}</div>
              {additionalContent}
            </div>
            {useDynamicRowHeight && (
              <span className={styles.height}>{datum.size}px</span>
            )}
          </div>
        );
    }
	
    render() {
        const {
            listHeight,
            listRowHeight,
            overscanRowCount,
            rowCount,
            scrollToIndex,
            showScrollingPlaceholder,
            useDynamicRowHeight,
        }=this.state;
        return (
            <div className="list-demo">
                <div className="vitual-list">
                   <AutoSizer disableHeight>
                     {({width}) => (
                       <List
                         ref="List"
                         className={styles.List}
                         height={listHeight}
                         overscanRowCount={overscanRowCount}
                         noRowsRenderer={this._noRowsRenderer}
                         rowCount={rowCount}
                         rowHeight={
                           useDynamicRowHeight ? this._getRowHeight : listRowHeight
                         }
                         rowRenderer={this._rowRenderer}
                         scrollToIndex={scrollToIndex}
                         width={width}
                       />
                     )}
                   </AutoSizer>
                </div>
            </div>
        );
    }
};
export default VList;
