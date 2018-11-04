export default function getPlacements(triggerBoundingBox, contentBoundingBox, placement = 'bottom') {
    let top = triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop + triggerBoundingBox.height;
    let left = triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft;


    if(left + contentBoundingBox.width > window.innerWidth) {
        left = window.innerWidth - contentBoundingBox.width;
    }

    return {top,left}
}
