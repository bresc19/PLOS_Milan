![badge](https://img.shields.io/conda/pn/conda-forge/python?color=blue) 
![badge1](https://img.shields.io/badge/-HTML-orange)  ![badge1](https://img.shields.io/badge/-JAVASCRIPT-red) ![badge2](https://img.shields.io/badge/-CSS-green)
#  Enhanced Pedestrian Level of Service (PLoS):
Data Collection, Processing and Visualization of the result of Plos computation of an area in Milan (Milano Nord Bovisa Station). 
![image](https://cleanairasia.org/wp-content/uploads/portal/files/Walkability.JPG)

## What is PloS?
The Pedestrian LOS Model is aimed at evaluating walking conditions on road and street corridors in urban environment.
PLoS is a measure of comfort and safety of existing and planned walkways. It allows objective and sound evaluations of pedestrians’ perception and response to roadway environment.

## Project
Web GIS about a QGIS project of PLOS computation of an area in Milan (Milano Nord Bovisa Station) using HTML5, CCS and JavaScript.

<kbd><img src="img/website.png" width="400" height="250" ></kbd>
<br />
<br />

### Implementation: Steps
<img src="img/epicollect.jpeg" width="13%" height="13%"  align="right">

1- **Collect Data**: using [EpiCollect](https://five.epicollect.net) we collect measurament of data for PLoS computation in a field survey and download them in .csv format; 
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
2-**Data Processing**: we process date using QGIS, with operations such as buffer, intersection and attribute table manipulation in order to associate each point value to the corresponding road network and to compute the PLoSs index for each segments; <img src="img/README.jpeg" width="30%" height="30%"  align="right">
<br />
<br />
<br />
<br />
<br />
<br />
<br />

3-**WebGIS develop**: we develop a [website](https://github.com/bresc19/PLOS_Milan/blob/master/index.html) in order to show the the result of the PLoSs index computation
<img src="img/PLOS.png" width="30%" height="30%"  align="right" >
<br />
<br />
<br />
<br />
<br />
<br />

### Web Site Implementation: tool used
- ![badge](https://img.shields.io/badge/GeoServer-2.15-blue)
- ![badge](https://img.shields.io/badge/QGIS-3.4-green)
- ![badge](https://img.shields.io/badge/OpenLayers-6.1.1-9cf)

<img src="img/Geoserver.svg" width="10%" height="10%" alt="small img" > <img src="img/qgis.png" width="8%" height="8%"  alt="small img" >   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/OpenLayers_logo.svg/1024px-OpenLayers_logo.svg.png" width="5%" height="5%"  alt="small img" >  



## Authors

* **Bresciani Matteo** 
* **Orsenigo Andrea**
* **Gabriele D’Ascoli**
* **Metehan Ergen**
