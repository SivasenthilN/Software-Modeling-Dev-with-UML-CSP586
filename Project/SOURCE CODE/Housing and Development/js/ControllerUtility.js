// Chart factory method is been implemented in the chart section. Here the CreateChart() function creates the various charts using Chart.js 
class ChartFactory{
	createChart(chartType){
		let chart = null;
		if(chartType == "pie"){
			chart = new PieChart();
		} else if(chartType == "bar"){
			chart = new BarChart();
		} else if(chartType == "line"){
			chart = new LineChart();
		}else if(chartType == "doughnut"){
			chart = new DoughnutChart();
		}
		return chart;
	}
}

// here the orderchart() function create the chart type through the class ChartMain which we have selected in the dashboard 
class ChartMain{
	constructor(chartFactory){
		this.chartFactory = new ChartFactory();
	}
	
	orderChart(chartType){
		var chart = this.chartFactory.createChart(chartType);
		return chart;
	}
}

// This class contains the functions plot(), getbgColor() and getborderColor() which are the basic operation of the chart
class ChartOperation{
	
	constructor(chart, name,type, plotchartTool, labels = [], chartData = [], backgroundColor = '', borderColor = '', options = {}) {
		if(chart != undefined || chart != null){
		this.name = chart.name;
		this.type = chart.type;
		this.plotchartTool = chart.plotchartTool;
		this.labels = chart.labels;
		this.chartData = chart.chartData;
		this.backgroundColor = chart.backgroundColor;
		this.borderColor = chart.borderColor;
		this.options = chart.options;
		}
	}
	
	plot(){
		var plotchartTool = this.plotchartTool;
		if(plotchartTool){
			plotchartTool.innerHTML = "";
		}
		new Chart(plotchartTool, {
			type: this.type,
			data: {
				labels: this.labels,
				datasets: [{
					label: this.labels,
					data: this.chartData,
					backgroundColor: this.backgroundColor,
					borderColor: this.borderColor,
					borderWidth: 1
				}]
			},
			options: this.options
		});
	}
	
	getbgColor(noOfCols){
		var bgColor = colorCodes;
		var bgColors = [];
		for(var i=0;i<noOfCols;i++){
			var randomIndex = Math.floor((Math.random() * (bgColor.length-1)) + 0);
			bgColors.push(bgColor[randomIndex]);
		}
		return bgColors;
	}
	
	getborderColor(noOfCols){
		var borderColor = colorCodes;
		var borderColors = [];
		for(var i=0;i<noOfCols;i++){
			var randomIndex = Math.floor((Math.random() * (borderColor.length-1)) + 0);
			borderColors.push(borderColor[randomIndex]);
		}
		return borderColors;
	}
}

//This class inherit from class Chartoperation for the labels, data, bgcolor and borderColor 
class ChartConfig extends ChartOperation{
	
	constructor(chart) {
		super(chart);
	}
	setLabelAndData(labels, data){
	  this.labels = labels;
	  this.chartData = data;
	}
	
	applyBackgroundColor(chartConfig){
		
	}

	applyBorderColor(chartConfig){

	}	
	
	randomScalingFactor() {
		return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
	}
}

//Chart also contains the decorator pattern for adding the additional features to the chart in the dashboard like colors.
class ChartDecorator extends ChartConfig {

	applyBorderColor(chartConfig){
		chartConfig.borderColor = chartConfig.getborderColor(chartConfig.chartData.length);
	}
}

//Decorator "#decoratore" classes inherits from the class ChartDecorator for its formating functions 
class BarChartDecorator extends ChartDecorator {

	applyBackgroundColor(chartConfig){
		chartConfig.backgroundColor = chartConfig.getbgColor(chartConfig.chartData.length);
	}
}

class PieChartDecorator extends ChartDecorator {

	applyBackgroundColor(chartConfig){
		chartConfig.backgroundColor = chartConfig.getbgColor(chartConfig.chartData.length);
	}
}



class DoughnutChartDecorator extends ChartDecorator {

	applyBackgroundColor(chartConfig){
		chartConfig.backgroundColor = chartConfig.getbgColor(chartConfig.chartData.length);
	}
}

class LineChartDecorator extends ChartDecorator {
}


// Plotting of pie chart is been carried in this class which is inherited from the class chartConfig
class PieChart extends ChartConfig{
  constructor() {
    super({
      name: 'Pie Chart',
      type: 'pie',
      plotchartTool: document.getElementById("piechartcanvas"),
      labels: [],
	  chartData: [],
	  backgroundColor: '',
	  borderColor: '',
	  options:{
			title: {
				display: true,
				text: 'Pie Chart',
				position: 'bottom',
				fontSize: 20,
				fontStyle: 'bold'
			}
		}
    });
  }
}

// Plotting of DoughnutChart is been carried in this class which is inherited from the class chartConfig
class DoughnutChart extends ChartConfig{
  constructor() {
    super({
      name: 'Doughnut Chart',
      type: 'doughnut',
      plotchartTool: document.getElementById("doughnutchartcanvas"),
      labels: [],
	  chartData: [],
	  backgroundColor: '',
	  borderColor: '',
	  options:{
			title: {
				display: true,
				text: 'Doughnut Chart',
				position: 'bottom',
				fontSize: 20,
				fontStyle: 'bold'
			}
		}
    });
  }
}

// Plotting of Bar chart is been carried in this class which is inherited from the class chartConfig
class BarChart extends ChartConfig{
	
  constructor() {
    super({
      name: 'Bar Chart',
      type: 'bar',
      plotchartTool: document.getElementById("barchartcanvas"),
      labels: [],
	  chartData: [],
	  backgroundColor: '',
	  borderColor: '',
	  options:{
			title: {
				display: true,
				text: 'Bar Chart',
				position: 'bottom',
				fontSize: 20,
				fontStyle: 'bold'
			},
			scales: {
	            yAxes: [{
	                ticks: {
	                    min: 0	                   
	                }
	            }]
        }
		}
    });
  }
}


// Plotting of Line chart is been carried in this class which is inherited from the class chartConfig
class LineChart extends ChartConfig{

  constructor() {
    super({
      name: 'Line Chart',
      type: 'line',
      plotchartTool: document.getElementById("linechartcanvas"),
      labels: [],
	  chartData: [],
	  backgroundColor: '',
	  borderColor: '',
	  options:{
			title: {
				display: true,
				text: 'Line Chart',
				position: 'bottom',
				fontSize: 20,
				fontStyle: 'bold'
			}
		}
    });
  }	
}
