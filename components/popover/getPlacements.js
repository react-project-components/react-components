export default function getPlacements(triggerBoundingBox, contentBoundingBox, placement = 'bottom') {
    return {
        top: triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop + triggerBoundingBox.height,
        left: triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft
    }
}
