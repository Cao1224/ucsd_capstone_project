# Ethics of Artificial Intelligence in Crime
_UC San Diego Data Science Casptone Project [Winter 2025]_

**Section**: A10<br>
**Section Title**: Ethical Considerations in Using Artificial Intelligence<br>
**Mentor**: Emily Ramond and Greg Thein<br>

**Team Members**:
*   Catherine Back
*   Yuancheng (Kaleo) Cao
*   Aj Falak
*   Kavya Sriram

### Abstract
Predictive models in pretrial risk assessment influence judicial decisions but often inherit racial biases from historical criminal justice data. This work examines racial bias in these models and applies bias mitigation techniques to improve fairness. Using the Pretrial Release dataset (244,271 records, 112 features), we trained a random forest model with 100 estimators, achieving 83.27% accuracy on a 20% test set. To mitigate bias, we applied Reweighing as a pre-processing technique and Calibrated Equalized Odds Postprocessing as a post-processing method. Reweighing reduced the mean outcome difference from 0.009 to -0.00 in the training set, improving fairness at the data level. However, in the testing set, 1 - min(DI, 1/DI) fluctuated between 0.0266 and 0.15, showing instability across classification thresholds. After postprocessing, equal opportunity difference improved, reducing from 0.0136 to 0.0031 in the test set, while balanced accuracy remained at 0.6357. The trade-off between fairness and accuracy was more controlled in postprocessing, making it more effective for a highly imbalanced dataset. Given that fairness adjustments remained stable across validation and testing, Calibrated Equalized Odds Postprocessing is the preferred approach. Future work should explore more diverse datasets, threshold tuning, and hybrid methods to balance fairness and model performance.


File structure:
```
├── README.md   (this file)
├── pretrial.ipynb  (notebook)
├── pretrial_release_data2023.zip   (dataset)
```

## Setup Instructions

### Python

Supported Python Configurations:

| OS      | Python version |
| ------- | -------------- |
| macOS   | 3.8 – 3.11     |
| Ubuntu  | 3.8 – 3.11     |
| Windows | 3.8 – 3.11     |

1. **Clone the repository**
    - Clone the repository to your local machine using the following commands:
    ```bash
    git clone https://github.com/Cao1224/ucsd_capstone_project
    cd ucsd_capstone_project
    ```
    - Open the file `pretrial.ipynb` in Jupyter or any compatible IDE.
  
2. **Create conda environment**
```sh
conda create -n pretrial python=3.9.5
conda activate pretrial
pip install -r requirements.txt
```
3. **Install AIF360**  
   The project requires the **AIF360** package for fairness evaluation. Please ensure it is installed before running the notebook. Open your Jupyter Notebook or terminal and run the following commands:
   ```bash
   !pip install aif360

   !pip install 'aif360[all]'
   ```

## Citing AIF360

A technical description of AI Fairness 360 is available in this
[paper](https://arxiv.org/abs/1810.01943). Below is the bibtex entry for this
paper.

```
@misc{aif360-oct-2018,
    title = "{AI Fairness} 360:  An Extensible Toolkit for Detecting, Understanding, and Mitigating Unwanted Algorithmic Bias",
    author = {Rachel K. E. Bellamy and Kuntal Dey and Michael Hind and
	Samuel C. Hoffman and Stephanie Houde and Kalapriya Kannan and
	Pranay Lohia and Jacquelyn Martino and Sameep Mehta and
	Aleksandra Mojsilovic and Seema Nagar and Karthikeyan Natesan Ramamurthy and
	John Richards and Diptikalyan Saha and Prasanna Sattigeri and
	Moninder Singh and Kush R. Varshney and Yunfeng Zhang},
    month = oct,
    year = {2018},
    url = {https://arxiv.org/abs/1810.01943}
}
```
