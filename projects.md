---
layout: page 
title: Personal Projects
permalink: /projects/
---

### Stocks price forecasting

*Nov. 2024 - ongoing*

This project explores the potential of various forecasting models to predict stock prices, focusing on time series analysis and machine learning techniques.

Currently, I am implementing the Facebook Prophet algorithm to forecast ETF closing prices using data from Yahoo Finance. Prophet is an additive model that captures non-linear trends with built-in support for yearly, weekly, and daily seasonality, as well as holiday effects. It excels in analyzing time series with strong seasonal components and multiple seasons of historical data.

To test the model’s capabilities, I’m focusing on the Bloomberg Coffee Subindex, which is expected to exhibit noticeable seasonal trends due to agricultural cycles. The project is ongoing, and I will share updates and final results as the analysis progresses. Below are some preliminary findings.

<div style="text-align: center; margin-top: 10px;">
    <figure>
        <img src="stocks_analyser/forecast.png" alt="Forecast" width="400">
        <figcaption><i>Forecasting results using the Prophet model. The analysis is based on 1-minute interval data collected over 7 days.</i></figcaption>
    </figure>  
</div>

<div style="text-align: center; margin-top: 10px;">
    <figure>
        <img src="stocks_analyser/trend.png" alt="Trend" width="400">
        <figcaption><i>Trend analysis from the Prophet model, using 1-minute interval data collected over a 7-day period.</i></figcaption>
    </figure>  
</div>

<div style="text-align: center; margin-top: 10px;">
    <figure>
        <img src="stocks_analyser/backtest.png" alt="Backtest" width="400">
        <figcaption><i>Backtesting results using the Prophet model. Only the input data (blue points) are provided to the model. The predicted values (green line) are then compared with observed close prices (orange points).</i></figcaption>
    </figure>  
</div>

---

<br/><br/>

### Efficient Classification of Solar Variability 

*Nov. 2024 – Dec. 2024*

This project leverages data from the Friuli Venezia Giulia Regional Meteorological Observatory to explore innovative approaches to weather classification. By comparing traditional methods based on solar radiation patterns with modern machine learning (ML) techniques, I demonstrated how ML models can simplify the process by using daily averaged meteorological data instead of detailed hourly measurements.

The Support Vector Classifier (SVC) stood out for its ability to accurately distinguish clear and cloudy days. However, all methods faced challenges in identifying intermediate weather types, highlighting opportunities for improvement in feature design.

This work showcases the potential of ML to make weather classification more efficient and scalable, while providing valuable insights into improving traditional approaches.

<div style="text-align: center; margin-top: 10px;">
    <figure>
        <img src="solar_variability/img/cloudy_2012_5_6.png" alt="Cloudy day in Capriva del Friuli" width="400">
        <figcaption><i>Example of a day categorised in the project. The black solid line represent the measured solar radiation while the grey one the predicted one (I used the ineichen model).</i></figcaption>
    </figure>  
</div>

**Objective:** Developed a machine learning framework for day-type classification using meteorological data from the Friuli Venezia Giulia Regional Meteorological Observatory.

**Techniques:** Employed supervised learning methods (Support Vector Classifier, Random Forest, K-Nearest Neighbors) and compared them to traditional clustering approaches based on binormalized daily solar radiation patterns.

**Tools:** Python, Scikit-learn, Pandas, Matplotlib, SHAP.

**Outcome:** Demonstrated that the Support Vector Classifier achieved the highest accuracy in distinguishing clear and cloudy days, while uncovering limitations in traditional methods for identifying intermediate day types (quasi-clear).

**Full Report:** The full report can be found [here](solar_variability/OSMER_data_classification.pdf).

---
