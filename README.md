# Count Text Duplicated Words

This project involves creating a program that analyzes a text input to identify words that appear more than once. The tool will output a list of duplicated words along with their respective counts. It aims to help users understand the frequency of specific words in their text, which can be useful for various applications such as improving writing quality, ensuring keyword balance in SEO content, or simply for linguistic analysis.

## How to run:

- Save a .txt file containing a text in the "archives" folder.
- Run the project, as follows:

```bash
  node cli.js ./archives/[FILE-TO-BE-READ].txt
```

Example using a default file:

 ```bash
  node cli.js ./archives/nodeJS.txt
```

- A new .txt file will be created in the "results" folder, with the same name as the read file. This file will have all the results of repeated words per paragraph (If no repeated words were found, a different message will be displayed).

## Key Features:

**Text Input:** Accepts only .txt extension archives containing the text.

**Word Identification:** Processes the text to identify unique words, ignoring common punctuation, such as special characters.

**Duplication Count:** Counts the occurrences of each word and highlights those that appear more than once.

**Output:** Provides a clear, user-friendly list of duplicated words and their counts.

## Technologies Used:

**Programming Language:** Javascript and nodeJS (runtime).

**Libraries:** FileSystem (fs).

## Use cases:

**Writing and Editing:** Helps authors and editors refine their work by identifying overused words.

**SEO Optimization:** Assists content creators in maintaining an appropriate keyword density.
Linguistic Research: Aids researchers in analyzing text patterns and word frequency.