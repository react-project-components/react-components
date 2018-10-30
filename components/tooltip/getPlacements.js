// 箭头的补全
const gap = 0;

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

export default function getPlacements(triggerBoundingBox, contentBoundingBox, placement = 'top') {

  placement = adjustPlacement(triggerBoundingBox, contentBoundingBox, placement);

  if (placement === 'top') {
    return {
      top: triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop - contentBoundingBox.height,
      left: triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft - (contentBoundingBox.width - triggerBoundingBox.width) * 0.5,
      placement
    }
  } else if (placement === 'right') {
    return {
      top: triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop - (contentBoundingBox.height - triggerBoundingBox.height) * 0.5,
      left: triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft + triggerBoundingBox.width,
      placement
    }
  } else if (placement === 'bottom') {
    return {
      top: triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop + triggerBoundingBox.height,
      left: triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft - (contentBoundingBox.width - triggerBoundingBox.width) * 0.5,
      placement
    }
  } else if (placement === 'left') {
    return {
      top: triggerBoundingBox.top + window.pageYOffset - document.documentElement.clientTop - (contentBoundingBox.height - triggerBoundingBox.height) * 0.5,
      left: triggerBoundingBox.left + window.pageXOffset - document.documentElement.clientLeft - contentBoundingBox.width,
      placement
    }
  }
}
