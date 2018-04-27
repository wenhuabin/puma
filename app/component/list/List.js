import 'scss/list.scss';
import 'scss/styles.css'
import {Component} from 'react';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/List';
import {List as IList} from 'immutable';
import cn from 'classnames';

class VList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: this._renderList(),
            listHeight: 420,
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
            list = list.push({color: 'red', size: 34, name: `The ${i}nd men.`});
        }
        return list;
    }

    _getDatum(index) {
        const list = this.state.list;
        return list.get(index % list.size);
    }

    _getRowHeight({index}) {
        return this._getDatum(index).size;
    }

    _noRowsRenderer() {
        return <div className="noRows">No rows</div>;
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
              className={cn("row", "isScrollingPlaceholder")}
              key={key}
              style={style}>
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
          <div className="row" key={key} style={style}>
            <div
              className="letter"
              style={{
                backgroundColor: datum.color,
              }}>
              {datum.name[0]}
            </div>
            <div>
              <div className="name">{datum.name}</div>
              <div className="index">This is row {index}</div>
              {additionalContent}
            </div>
            {useDynamicRowHeight && (
              <span className="height">{datum.size}px</span>
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
                         className="List"
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
