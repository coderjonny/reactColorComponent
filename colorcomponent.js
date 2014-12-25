var MYLIST = React.createClass({displayName: 'MYLIST',
            render: function() {

                var data = this.props.data;

                var rows = data.map(function(datum) {

                var divStyle = function(x){
                  return {color: datum[x]}
                };

                var clickHandler = function(ev){
                    console.log("Still in reactJs");
                    console.log(ev);
                }

                function tenColors(){
                  var arr = [];
                  for(var i=0; i<10; i++){
                    arr.push(React.DOM.td({style: divStyle(i)}, datum[i]))
                  }
                  return arr;
                }

                return (
                  React.DOM.tr( {onClick:clickHandler},
                   tenColors()
                  )
                );
              });

              return (
                React.DOM.table(null,
                  rows
                )
              );
            }
        });
