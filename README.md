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
