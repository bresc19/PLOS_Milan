![badge](https://img.shields.io/conda/pn/conda-forge/python?color=blue) 
![badge1](https://img.shields.io/badge/-HTML-orange)  ![badge1](https://img.shields.io/badge/-JAVASCRIPT-red) ![badge2](https://img.shields.io/badge/-CSS-green)
#  :arrow_right: Enhanced Pedestrian Level of Service (PLoS): :arrow_left:
Data Collection, Processing and Visualization of the result of Plos computation of an area in Milan (Milano Nord Bovisa Station). 
![image](https://cleanairasia.org/wp-content/uploads/portal/files/Walkability.JPG)

## What is PloS?
The Pedestrian LOS Model is aimed at evaluating walking conditions on road and street corridors in urban environment.
PLoS is a measure of comfort and safety of existing and planned walkways. It allows objective and sound evaluations of pedestrians’ perception and response to roadway environment.

## Project 
Web GIS about a QGIS project of PLOS computation of an area in Milan (Milano Nord Bovisa Station)

<kbd><img src="img/website.png" width="400" height="250"  align="left"></kbd><kbd><img src="img/GIS3.png" width="400" height="250"  align="right" ></kbd>

<br />
<br />

### Implementation: Steps
<img src="https://five.epicollect.net/images/ec5-intro-collect-data.jpg" width="40%" height="40%"  align="right">

1- **Collect Data**: Using [EpiCollect](https://five.epicollect.net) our group collects measurament of data for PLoS computation. Then we store the results in a field survey and download them in .csv format;
<br />
<br />
<br />
<br />
<br />
<br />
<br />
 <img src="img/README.jpeg" width="30%" height="30%"  align="left">
2- **Data Processing**: we process data using QGIS, with operations such as buffer, intersection and attribute table manipulation in order to associate each point value to the corresponding road network and to compute the PLoSs index for each segments;
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<img src="img/PLOS.png" width="30%" height="30%"  align="right" >
3- **WebGIS develop**: we develop a [website](https://github.com/bresc19/PLOS_Milan/blob/master/index.html) in order to show the the result of the PLoSs index computation
<br />
<br />
<br />
<br />
<br />
<br />

## Website Implementation :computer:
- **LayerSwitcher** in order to change basemaps;
- **WFS** (points) and **WMS** connections;
- **GetFeatureInfo** request for WMS layer;
- **Popup** in order to show PLoS computation;


### Tool Used :wrench:
- ![badge](https://img.shields.io/badge/GeoServer-2.15-blue)
- ![badge](https://img.shields.io/badge/QGIS-3.4-green)
- ![badge](https://img.shields.io/badge/OpenLayers-6.1.1-9cf)
- ![badge](https://img.shields.io/badge/Epicollect-5-purple)



### Authors :bust_in_silhouette: :bust_in_silhouette: :bust_in_silhouette: :bust_in_silhouette:

* **Bresciani Matteo** 
* **Orsenigo Andrea**
* **Gabriele D’Ascoli**
* **Metehan Ergen**
