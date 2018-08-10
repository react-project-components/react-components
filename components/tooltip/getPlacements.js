// 箭头的补全
const gap = 0;

export default function getPlacements(triggerBoundingBox, contentBoundingBox, placement = 'top') {

    console.log('triggerBoundingBox ', triggerBoundingBox, 'contentBoundingBox', contentBoundingBox);

    if (placement === 'top') {
        return {
            top: triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop - contentBoundingBox.height,
            left: triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft - (contentBoundingBox.width - triggerBoundingBox.width) * 0.5
        }
    } else if (placement === 'right') {
        return {
            top: triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop - (contentBoundingBox.height - triggerBoundingBox.height) * 0.5,
            left: triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft + triggerBoundingBox.width
        }
    } else if (placement === 'bottom') {
        return {
            top: triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop + triggerBoundingBox.height,
            left: triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft - (contentBoundingBox.width - triggerBoundingBox.width) * 0.5
        }
    } else if (placement === 'left') {
        return {
            top: triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop - (contentBoundingBox.height - triggerBoundingBox.height) * 0.5,
            left: triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft - contentBoundingBox.width
        }
    }
}
