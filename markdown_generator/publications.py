import os
import pandas as pd

# publications = pd.read_csv("publications.tsv", sep="\t", header=0)
publications = pd.read_csv("publications.csv", sep=",", header=0)

html_escape_table = {
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;"
    }

md_escape_table = {
    "*": "\*"
}

def html_escape(text):
    """Produce entities within text."""
    return "".join(html_escape_table.get(c,c) for c in text)

def md_escape(text):
    """Produce entities within text."""
    return "".join(md_escape_table.get(c,c) for c in text)

for row, item in publications.iterrows():
    
    md_filename = str(item.pub_year) + "-" + item.url_slug + ".md"
    html_filename = str(item.pub_year) + "-" + item.url_slug
    
    ## YAML variables
    
    md = "---\ntitle: \""   + item.title + '"\n'
    
    md += """collection: publications"""
    
    md += """\npermalink: /publication/""" + html_filename
    
    # if len(str(item.excerpt)) > 5:
    #     md += "\nexcerpt: '" + html_escape(item.excerpt) + "'"
    
    md += "\nyear: " + str(item.pub_year) 
    
    md += "\nvenue: '" + html_escape(item.venue) + "'"
    
    if len(str(item.paper_url)) > 5:
        md += "\npaperurl: '" + item.paper_url + "'"
    
    if len(str(item.bibtex)) > 5:
        md += "\nbibtex: '" + item.bibtex + "'"
    
    if len(str(item.authors)) > 5:
        md += "\nauthors: '" + item.authors + "'"
    
    md += "\n---"
    
    ## Markdown description for individual page
    
    if len(str(item.paper_url)) > 5:
        md += "\n\n<a href='" + item.paper_url + "'>Paper</a>\n" 
    
    if len(str(item.bibtex)) > 5:
        md += "\n\n<a href='" + item.bibtex + "'>BibTeX</a>\n" 
        
    if len(str(item.authors)) > 5:
        md += "\n" + html_escape(md_escape(item.authors)) + "\n"
        
    if len(str(item.excerpt)) > 5:
        md += "\nAbstract: " + html_escape(md_escape(item.excerpt)) + "\n"
    
    md_filename = os.path.basename(md_filename)
       
    with open("../_publications/" + md_filename, 'w') as f:
        f.write(md)


