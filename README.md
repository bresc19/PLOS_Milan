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

<img src="img/website.png" width="400" height="250">





```
Give examples
```

### Implementation

1- **Collect Data**: using [EpiCollect](https://five.epicollect.net) we collect measurament of data for PLoS computation in a field survey and download them in .csv format; 



<img src="img/epicollect.jpeg" width="13%" height="13%"  align="right">






2-**Data Processing**: we process date using QGIS, with operations such as buffer, intersection and attribute table manipulation in order to associate each point value to the corresponding road network and to compute the PLoSs index for each segments; <img src="img/README.jpeg" width="25%" height="25%"  align="right">









```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
