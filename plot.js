/* 
Google Play Store Data Dashboard using Plotly.js
dataset: https://www.kaggle.com/datasets/lava18/google-play-store-apps
*/

function createPlot() {

  Plotly.d3.csv("googleplaystore_fix.csv", function(data){ 
    processData(data) 
  } );
};
 
function processData(allRows) {

  // console.log(allRows);
  var app = []; 
  var cat = []; 
  var rating = [];
  var review = []; 
  var size = []; 
  var install = [];
  var type = []; 
  var cont_rating = [];

  // iterate and push values into corresponding array
  for (var i=0; i < allRows.length; i++) {
    row = allRows[i];
    app.push( row['App'] );
    cat.push( row['Category'] );
    rating.push( row['Rating'] );
    review.push( row['Review'] );
    size.push( row['Size'] );
    install.push( row['Installs'] );
    type.push( row['Type'] );
    cont_rating.push( row['Content Rating'] );
 }

  // count each unique values in category
  let cat_count = cat.reduce(
    function(obj, val) {
    obj[val] = ++obj[val] || 1;
    return obj;
    }, {}
  );
  // find proportion of each values in type column
  var type_prop ={};
  type.map(el=>{
    if(!type_prop[el]){
      return type_prop[el]=type.filter(ob=>ob===el).length*100/type.length
      }
    });
  // count each unique values in content rating
  let cr_count = cont_rating.reduce(
    function(obj, val) {
    obj[val] = ++obj[val] || 1;
    return obj;
    }, {}
  );
  // count each unique values in rating
  let rate_count = rating.reduce(
    function(obj, val) {
    obj[val] = ++obj[val] || 1;
    return obj;
    }, {}
  );

  makePlotly( cat_count, type_prop, cr_count, rate_count );  
}

// create dashboard
function makePlotly( cat_count, type_prop, cr_count, rate_count ){

  var DASHBOARD = document.getElementById("dashboard");
  // category
  var trace1 = {
      x: Object.values(cat_count),
      y: Object.keys(cat_count),
      type: 'bar',
      domain: {
        row: 0,
        column: 0
      },
      orientation: 'h',
      transforms: [{
        type: 'sort',
        target: 'x',
        order: 'ascending'
      }]
  };
  // type
  var trace2 = { 
      labels: Object.keys(type_prop),
      values: Object.values(type_prop),
      type: 'pie',
      domain: {
        row: 0,
        column: 1
      },
      textinfo: "label+percent",
      textposition: "outside",
      automargin: true
  };
  // content rating
  var trace3 = {
      x: Object.keys(cr_count),
      y: Object.values(cr_count),
      xaxis: 'x3',
      yaxis: 'y3',
      type: 'bar',
      transforms: [{
        type: 'sort',
        target: 'y',
        order: 'descending'
      }]
  } 
  // rate
  var trace4 = {
      x: Object.keys(rate_count),
      y: Object.values(rate_count),
      xaxis: 'x4',
      yaxis: 'y4',
      type: 'bar'
  }
  var data = [trace1, trace2, trace3, trace4];

  var layout = {
      title: {
        text:'Google Play Store Data Dashboard',
        font: {
          size: 20,
        },
      },
      height: 620,
      width: 1400,
      grid: {rows: 2, columns: 2, pattern: 'independent'},
      showlegend: false,
      font: {size:8}
  };

  var config = {
      responsive: true, 
      editable: true  
  };  

  Plotly.newPlot(DASHBOARD, data, layout, config);
};

createPlot();