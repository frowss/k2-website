document.querySelectorAll('img[data-tooltip]').forEach(img => {
  img.addEventListener('mouseover', function (e) {
    const tooltipText = this.getAttribute('data-tooltip');
    
    // Create a tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = tooltipText;
    
    // Append the tooltip to the body
    document.body.appendChild(tooltip);
    
    // Update the tooltip position on mousemove
    img.addEventListener('mousemove', function (e) {
      const offsetX = 15;
      const offsetY = 15;
      tooltip.style.left = `${e.pageX + offsetX}px`;
      tooltip.style.top = `${e.pageY + offsetY}px`;
      tooltip.style.opacity = 1;
    });

    // Remove the tooltip on mouseout
    img.addEventListener('mouseout', function () {
      tooltip.remove();
    });
  });
});
