// 距离窗口的最小距离
const gap = 4;

// tooltip自动调整位置
function adjustPlacement(triggerBoundingBox, contentBoundingBox, placement = 'top') {
    let finalPlacement = placement;
    if (placement === 'top' && triggerBoundingBox.top - contentBoundingBox.height < 0) {
        finalPlacement = 'bottom';
    }

    if (placement === 'bottom' && triggerBoundingBox.bottom + contentBoundingBox.height > window.innerHeight) {
        finalPlacement = 'top';
    }


    if (placement === 'left' && triggerBoundingBox.left - contentBoundingBox.width < 0) {
        finalPlacement = 'right';
    }


    if (placement === 'right' && triggerBoundingBox.right + contentBoundingBox.width > window.innerWidth) {
        finalPlacement = 'left';
    }

    return finalPlacement;
}


function getConstraintOffset(current, min, max) {
    if (current < min) return current - min;
    if (current > max) return current - max;
    return 0;
}

export default function getPlacements(triggerBoundingBox, contentBoundingBox, placement = 'top') {

    placement = adjustPlacement(triggerBoundingBox, contentBoundingBox, placement);

    let top = -9999, left = -9999, offsetX = 0, offsetY = 0;

    let minLeft = window.pageXOffset + gap;
    let maxLeft = window.pageXOffset + window.innerWidth - contentBoundingBox.width - gap;
    let minTop = window.pageYOffset + gap;
    let maxTop = window.pageYOffset + window.innerHeight - contentBoundingBox.height - gap;

    if (placement === 'top') {
        top = triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop - contentBoundingBox.height;
        left = triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft - (contentBoundingBox.width - triggerBoundingBox.width) * 0.5;
        offsetX = getConstraintOffset(left, minLeft, maxLeft);
    } else if (placement === 'right') {
        top = triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop - (contentBoundingBox.height - triggerBoundingBox.height) * 0.5;
        left = triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft + triggerBoundingBox.width;
        offsetY = getConstraintOffset(top, minTop, maxTop);
    } else if (placement === 'bottom') {
        top = triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop + triggerBoundingBox.height;
        left = triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft - (contentBoundingBox.width - triggerBoundingBox.width) * 0.5;
        offsetX = getConstraintOffset(left, minLeft, maxLeft);
    } else if (placement === 'left') {
        top = triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop - (contentBoundingBox.height - triggerBoundingBox.height) * 0.5;
        left = triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft - contentBoundingBox.width;
        offsetY = getConstraintOffset(top, minTop, maxTop);
    }
    return {
        top: Math.max(Math.min(top, maxTop), minTop),
        left: Math.max(Math.min(left, maxLeft), minLeft),
        placement,
        offsetX,
        offsetY
    }
}
