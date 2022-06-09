const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1920, 1500 ]
};

const sketch = () => {
  return ({ context, width, height }) => {

    context.fillStyle = "#E5EECE";
    context.fillRect(0, 0, width, height);

    var data1 = [["Unrated",7414], ["Teen",1084], ["Mature 17+",461], ["Everyone 10+",397], ["Adults Only 18+",3], ["Unrated 10+",1]];
    var data2 = [["Free", 8715],["Paid",645]];
    var data3 = [["Family",1746],
                 ["Tools",733],
                 ["Medical",350],
                 ["Finance",323],
                 ["Photography",317],
                 ["Personalization",312],
                 ["Health and Fitness",297],
                 ["Shopping",238],
                 ["Travel and Local",226],
                 ["Books and Reference",178],];
    var data4 = [["5-4",6796], ["3-4", 2194], ["2-3", 302], ["1-2", 68]];

    // Judul
    context.save();
    context.font = `50px Consolas`;
    context.fillStyle = "#373737";
    context.fillText("Google Play Store Dashboard",600,65);
    context.restore();

    // Data 1
    context.beginPath();
    context.moveTo(100,100);
    context.lineTo(100,400); 
    context.lineTo(800,400); 
    context.stroke();
    context.closePath();

    context.save();
    context.font = `35px serif`;
    context.fillStyle = "#373737";
    context.fillText("Number of Apps by Content Rating",350,200);
    context.restore();

    context.save();
    context.fillStyle = 'blue';
    context.translate(0, height);
    context.scale(1, -1);  
    context.lineWidth = 3;
    for (var i = 0; i < data1.length; i++) {
      context.fillRect(120*(i+1),1101, 60, data1[i][1]/30);
    }
    context.restore();

    context.save();
    for (var i = 1; i <= 3; i++) {
      context.font = `15px Arial`;
      context.fillStyle = "#373737";
      context.fillText(2000*i,50,390-(60*i));
    }
    context.restore();

    context.save();
    for (var i = 0; i < data1.length; i++) {
      context.font = `15px Arial`;
      context.fillStyle = "#373737";
      context.fillText(data1[i][0],120*(i+1),420);
    }
    context.restore();

    context.save();
    context.font = `50px Consolas`;
    context.fillStyle = "#373737";
    context.fillText("Google Play Store Dashboard",600,65);
    context.restore();

    // Data 2
    context.beginPath();
    context.moveTo(100,600);
    context.lineTo(100,900); 
    context.lineTo(1300,900); 
    context.stroke();
    context.closePath();

    context.save();
    context.font = `35px serif`;
    context.fillStyle = "#373737";
    context.fillText("Number of Apps Category",350,675);
    context.restore();

    context.save();
    context.fillStyle = 'blue';
    context.translate(0, height);
    context.scale(1, -1);  
    context.lineWidth = 3;
    for (var i = 0; i < 10; i++) {
      context.fillRect(120*(i+1),601, 60, data3[i][1]/7);
    }
    context.restore();

    context.save();
    for (var i = 1; i <= 3; i++) {
      context.font = `15px Arial`;
      context.fillStyle = "#373737";
      context.fillText(500*i,50,900-(70*i));
    }
    context.restore();

    context.save();
    for (var i = 0; i < 10; i++) {
      context.font = `15px Arial`;
      context.fillStyle = "#373737";
      context.fillText(data3[i][0],120*(i+1),925);
    }
    context.restore();

    // Data 3
    context.beginPath();
    context.moveTo(100,1100);
    context.lineTo(100,1400); 
    context.lineTo(600,1400); 
    context.stroke();
    context.closePath();

    context.save();
    context.font = `35px serif`;
    context.fillStyle = "#373737";
    context.fillText("Rating Category for each App",350,1175);
    context.restore();

    context.save();
    context.fillStyle = 'blue';
    context.translate(0, height);
    context.scale(1, -1);  
    context.lineWidth = 3;
    for (var i = 0; i < 4; i++) {
      context.fillRect(120*(i+1),101, 60, data4[i][1]/30);
    }
    context.restore();

    context.save();
    for (var i = 1; i <= 3; i++) {
      context.font = `15px Arial`;
      context.fillStyle = "#373737";
      context.fillText(2000*i,50,1410-(70*i));
    }
    context.restore();

    context.save();
    for (var i = 0; i < 4; i++) {
      context.font = `15px Arial`;
      context.fillStyle = "#373737";
      context.fillText(data4[i][0],120*(i+1),1425);
    }
    context.restore();

    // Data 4
    
    context.save();
    context.font = `35px serif`;
    context.fillStyle = "#373737";
    context.fillText("Paid or Free",1425,825);
    context.restore();
    
    var data2_tot = data2[0][1] + data2[1][1];
    var start = 0;
    var center_x = 1500, center_y = 400;
      
    context.save();
    for (var i = 0; i < 2; i++) {
      if(data2[i][0] = "Free") {
        context.fillStyle = '#f45467';
        var sudut = data2[0][1]/data2_tot*2*Math.PI;
        context.beginPath();
        context.arc(1500, 400, 250, start, sudut, false);
        context.lineTo(center_x,center_y);
        context.fill();
      
        var persen_data1 = data2[0][1]/data2_tot*100;
      }
      if(data2[i][0] = "Paid") {
        context.fillStyle = '#36fe1d'
        start = sudut;
        var sudut = 2*Math.PI;
        var persen_data2 = data2[1][1]/data2_tot*100;
        context.beginPath();
        context.arc(1500, 400, 250, start, sudut, false);
        context.lineTo(center_x,center_y);
        context.fill();
      }
    }
    context.restore();

    // Free Persen
    context.save();
    context.font = `35px Arial`;
    context.fillStyle = "#373737";
    context.fillText("Free",1475,700);
    context.fillText(Math.round(persen_data1),1475,750);
    context.fillText("%",1520,750);
    context.restore();

    // Paid Persen
    context.save();
    context.font = `35px Arial`;
    context.fillStyle = "#373737";
    context.fillText("Paid",1775,310);
    context.fillText(Math.round(persen_data2),1780,350);
    context.fillText("%",1815,350);
    context.restore();
  } 
};
canvasSketch(sketch, settings);