const TENDPOINT = "https://www.tutorialspoint.com";

const Visitor = {
  "A": function visit(anchorElement) { return anchorElement; },
  "ABBR": function visit(abbreviationElement) { return abbreviationElement; },
  "AREA": function visit(areaElement) { return areaElement; },
  "ARTICLE": function visit(articleElement) { return articleElement;},
  "ASIDE": function visit(asideElement) { return asideElement; },
  "AUDIO": function visit(audioElement) { return audioElement; } ,
  "B": function visit(boldElement) { return boldElement; },
  "BASE": function visit(baseElement) { return baseElement; },
  "BDI": function visit(bdiElement) { return bdiElement; },
  "BDO": function visit(bdoElement) { return bdoElement; },
  "BLOCKQUOTE": function visit(blockquoteElement) { return blockquoteElement; },
  "BODY": function visit(bodyElement) { return bodyElement; },
  "BR": function visit(breakLineElement) { return breakLineElement; },
  "BUTTON": function visit(buttonElement) { return buttonElement; },
  "CANVAS": function visit(canvasElement) { return canvasElement; },
  "CAPTION": function visit(captionElement) { return captionElement; },
  "CITE": function visit(citeElement) { return citeElement; },
  "CODE": function visit(codeElement) { return codeElement; },
  "COL": function visit(colElement) { return colElement; },
  "COLGROUP": function visit(colGroupElement) { return colGroupElement; },
  "DATA": function visit(dataElement) { return dataElement; },
  "DATALIST": function visit(datalistElement) { return datalistElement; },
  "DD": function visit(ddElement) { return ddElement; },
  "DEL": function visit(delElement) { return delElement; },
  "DETAILS": function visit(detailsElement) { return detailsElement; },
  "DFN": function visit(dfnElement) { return dfnElement; },
  "DIALOG": function visit(dialogElement) { return dialogElement; },
  "DIV": function visit(divElement) { return divElement; },
  "DL": function visit(dlElement) { return dlElement; },
  "DT": function visit(dtElement) { return dtElement; },
  "EM": function visit(emElement) { return emElement; },
  "EMBED": function visit(embedElement) { return embedElement; },
  "FIELDSET": function visit(fieldsetElement) { return fieldsetElement; },
  "FIGCAPTION": function visit(figcaptionElement) { return figcaptionElement; },
  "FIGURE": function visit(figureElement) { return figureElement; },
  "FOOTER": function visit(footerElement) { return footerElement; },
  "FORM": function visit(formElement) { return formElement; },
  "H1": function visit(h1Element) { 
    h1Element.className="subtitle";
    return h1Element; 
  },
  "H3": function visit(h2Element) { 
    h2Element.className="subtitle"
    return h2Element; 
  },
  "H2": function visit(h3Element) { 
    h3Element.className="subtitle";
    return h3Element; 
  },
  "H4": function visit(h4Element) { 
    h4Element.className="subtitle";
    return h4Element; 
  },
  "H5": function visit(h5Element) { 
    h5Element.className="subtitle";
    return h5Element; 
  },
  "H6": function visit(h6Element) { 
    h6Element.className="subtitle";
    return h6Element; 
  },
  "HEAD": function visit(headElement) { return headElement; },
  "HEADER": function visit(headerElement) { return headerElement; },
  "HR": function visit(hrElement) { return hrElement; },
  "html": function visit(htmlElement) { return htmlElement; },
  "I": function visit(iElement) { return iElement;},
  "IFRAME": function visit(iframeElement) { 
    iframeElement.removeAttribute("onload");
    iframeElement.setAttribute("src", `${TENDPOINT}${iframeElement.getAttribute("src")}`)
    return iframeElement; 
  },
  "IMG": function visit(imgElement) { 
    imgElement.setAttribute("src", `${TENDPOINT}${imgElement.getAttribute("src")}`);
    return imgElement; 
  },
  "INPUT": function visit(inputElement) { return inputElement; },
  "INS": function visit(insElement) { return insElement; },
  "KBD": function visit(kbdElement) { return kbdElement; },
  "LABEL": function visit(labelElement) { return labelElement; },
  "LEGEND": function visit(legendElement) { return legendElement; },
  "LI": function visit(listItemElement) { return listItemElement; },
  "LINK": function visit(linkElement) { return linkElement; },
  "MAIN": function visit(mainElement) { return mainElement; },
  "MAP": function visit(mapElement) { return mapElement; },
  "MARK": function visit(markElement) { return markElement; },
  "META": function visit(metaElement) { return metaElement; },
  "METER": function visit(meterElement) { return meterElement; },
  "NAV": function visit(navelement) { return navelement; },
  "NOSCRIPT": function visit(noscriptElement) { return noscriptElement; },
  "OBJECT": function visit(objectElement) { return objectElement; },
  "OL": function visit(orderedListElement) { return orderedListElement; },
  "OPTGROUP": function visit(optgroupElement) { return optgroupElement; },
  "OPTION": function visit(optionElement) { return optionElement; },
  "OUTPUT": function visit(outputElement) { return outputElement; },
  "P": function visit(paragraphElement) { return paragraphElement; },
  "PARAM": function visit(paramElement) { return paramElement; },
  "PICTURE": function visit(pictureElement) { return pictureElement; },
  "PRE": function visit(preElement) { return preElement; },
  "PROGRESS": function visit(progressElement) { return progressElement; },
  "Q": function visit(qElement) { return qElement; },
  "RB": function visit(rbElement) { return rbElement; },
  "RP": function visit(rpElement) { return rpElement; },
  "RT": function visit(rtElement) { return rtElement; },
  "RTC": function visit(rtcElement) { return rtcElement; },
  "RUBY": function visit(rubyElement) { return rubyElement; },
  "S": function visit(sElement) { return sElement; },
  "SAMP": function visit(sampElement) { return sampElement; },
  "SCRIPT": function visit(scriptElement) { return scriptElement; },
  "SECTION": function visit(sectionElement) { return sectionElement; },
  "SELECT": function visit(selectElement) { return selectElement; },
  "SLOT": function visit(slotElement) { return slotElement; },
  "SMALL": function visit(smallElement) { return smallElement; },
  "SOURCE": function visit(sourceElement) { return sourceElement; },
  "SPAN": function visit(spanElement) { return spanElement; },
  "STRONG": function visit(strongElement) { return strongElement; },
  "STYLE": function visit(styleElement) { return styleElement; },
  "SUB": function visit(subElement) { return subElement; },
  "SUMMARY": function visit(summaryElement) { return summaryElement; },
  "SUP": function visit(supElement) { return supElement; },
  "TABLE": function visit(tableElement) { 
    tableElement.className="table is-striped";
    return tableElement;
   },
  "TBODY": function visit(tbodyElement) { return tbodyElement; },
  "TD": function visit(tdElement) { return tdElement; },
  "TEMPLATE": function visit(templateElement) { return templateElement; },
  "TEXTAREA": function visit(textareaElement) { return textareaElement; },
  "TFOOT": function visit(tfootElement) { return tfootElement; },
  "TH": function visit(thElement) { return thElement; },
  "THEAD": function visit(theadElement) { return theadElement; },
  "TIME": function visit(timeElement) { return timeElement; },
  "TITLE": function visit(titleElement) { return titleElement; },
  "TR": function visit(trElement) { return trElement; },
  "TRACK": function visit(trackElement) { return trackElement; },
  "U": function visit(uElement) { return uElement; },
  "UL": function visit(ulElement) { return ulElement; },
  "VAR": function visit(varElement) { return varElement; },
  "VIDEO": function visit(videoElement) { return videoElement; },
  "WBR": function visit(wbrElement) { return wbrElement; }
};