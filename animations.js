  
  // ANIMATION FOR HOVERING EFFECT ON THE NAV BAR WHEN LINKED SECTIONS DISPLAYED
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('#home, .section, .section1, .section2');
  
    function getActiveSection() {
        let maxSection = sections[0];
        let maxVisibleHeight = 0;
  
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  
            if (visibleHeight > maxVisibleHeight) {
                maxVisibleHeight = visibleHeight;
                maxSection = section;
            }
        });
  
        return maxSection;
    }
  
    function updateActiveLink() {
        if (navLinks.length === 0 || sections.length === 0) {
            return;
        }
  
        const activeSection = getActiveSection();
        const activeLinkId = `#${activeSection.id}`;
        const newActiveLink = document.querySelector(`.navbar a[href="${activeLinkId}"]`);
  
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
  
        if (newActiveLink) {
            newActiveLink.classList.add('active');
        }
    }
  
    // Run on scroll and resize
    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('resize', updateActiveLink);
  
    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
  
    // Initial update
    updateActiveLink();
  });
  
  
  
  // Access the iframe document GUIDE 1111111111
  var iframe;
  var iframe2;
  var iframe3;
  var iframe4;
  var iframe5;
  
   

   

document.getElementById('line_plot_iframe').addEventListener('load', function() {

    var iframe = this.contentDocument || this.contentWindow.document;
    
    var guide = document.querySelector('#guide1 li:nth-child(1)');
    var listItemCountries = document.querySelector('#guide1 li:nth-child(2)');
    var listItemLegend = document.querySelector('#guide1 li:nth-child(3)');
    var listItemThird = document.querySelector('#guide1 li:nth-child(4)');
  
    function addBlurToSelectBox() {
        var selectBox = iframe.querySelector('.select-box');
        if (selectBox) {
            selectBox.style.transition = 'box-shadow 0.5s ease';
            selectBox.style.boxShadow = '0 0 15px #3a80d6';
        }
    }

    function removeBlurFromSelectBox() {
        var selectBox = iframe.querySelector('.select-box');
        if (selectBox) {
            selectBox.style.boxShadow = '';
        }
    }

    function addShadowToLegend() {
        var legend = iframe.querySelectorAll('.legend-circle');
        legend.forEach(function(leg) {
            leg.style.transition = 'stroke 0.5s, stroke-width 0.5s';
            leg.style.stroke = 'rgba(30, 144, 255, 0.5)';
            leg.style.strokeWidth = '15px';
        });
    }

    function removeShadowFromLegend() {
        var legend = iframe.querySelectorAll('.legend-circle');
        legend.forEach(function(leg) {
            leg.style.stroke = '';
            leg.style.strokeWidth = '';
        });
    }

    function addShadowToCircles() {
        var circles = iframe.querySelectorAll('circle:not(.legend-circle)');
        circles.forEach(function(circle) {
            circle.classList.add('hover-shadow');
        });
    }

    function removeShadowFromCircles() {
        var circles = iframe.querySelectorAll('circle:not(.legend-circle)');
        circles.forEach(function(circle) {
            circle.classList.remove('hover-shadow');
        });
    }


    listItemCountries.addEventListener('mouseover', addBlurToSelectBox);
    listItemCountries.addEventListener('mouseout', removeBlurFromSelectBox);

    listItemLegend.addEventListener('mouseover', addShadowToLegend);
    listItemLegend.addEventListener('mouseout', removeShadowFromLegend);

    listItemThird.addEventListener('mouseover', addShadowToCircles);
    listItemThird.addEventListener('mouseout', removeShadowFromCircles);
});

document.getElementById('sankey_plot_iframe').addEventListener('load', function() {

    var iframe2 = this.contentDocument || this.contentWindow.document;

    var listNodes = document.querySelector('#guide2 li:nth-child(3)');
  
  
    function addBlurTonodes() {
      var directionNodes = iframe2.querySelectorAll('rect.dest');
      directionNodes.forEach(node =>{
          node.style.transition = 'stroke 0.5s ease, strokeWidth 0.5s ease';
          node.style.stroke = '#3a80d6';
          node.style.strokeWidth = '7px';
          node.style.strokeOpacity = '0.7';
      });
    }
  
    function removeBlurFromnodes() {
      var directionNodes = iframe2.querySelectorAll('rect.dest');
      directionNodes.forEach(node =>{
          node.style.transition = 'stroke 0.5s, strokeWidth 0.5s';
          node.style.stroke = '';
          node.style.strokeWidth = ''
      });
    }
    
    
    listNodes.addEventListener("mouseover",addBlurTonodes)
    listNodes.addEventListener("mouseout",removeBlurFromnodes)
  
    
});
    document.getElementById('bar_plot_iframe').addEventListener('load', function() {

        var iframe3 = this.contentDocument || this.contentWindow.document;

        var listyear = document.querySelector('#guide3 li:nth-child(1)');
        var listcount = document.querySelector('#guide3 li:nth-child(2)');
    function addshadowtoyearselect(){
      var yearsel =  iframe3.querySelector('#yearSelect');
      if(yearsel){
          yearsel.style.transition = 'box-shadow 0.5s ease';
          yearsel.style.boxShadow = '0 0 17px #3a80d6';
          
      }
    }
  
    function removeshadowtoyearselect(){
        var yearsel =  iframe3.querySelector('#yearSelect');
      if(yearsel){
          yearsel.style.transition = 'box-shadow 0.5s ease';
          yearsel.style.boxShadow = '';
      }
  
    }
  
    
 
  
    function addshadowtocountselect(){
      var countsel =  iframe3.querySelector('.dropdown');
      if(countsel){
          countsel.style.transition = 'box-shadow 0.5s ease';
          countsel.style.boxShadow = '0 0 17px #3a80d6';
          
      }
    }
  
    function removeshadowtocountselect(){
        var countsel =  iframe3.querySelector('.dropdown');
      if(countsel){
          countsel.style.transition = 'box-shadow 0.5s ease';
          countsel.style.boxShadow = '';
      }
  
    }
  
    listyear.addEventListener("mouseover", addshadowtoyearselect);
    listyear.addEventListener("mouseout",removeshadowtoyearselect);
    listcount.addEventListener("mouseover", addshadowtocountselect);
    listcount.addEventListener("mouseout",removeshadowtocountselect);
  
  
});

document.getElementById('scatter_plot_iframe').addEventListener('load', function() {
    iframe4 = this.contentDocument || this.contentWindow.document;

    var listcountsc = document.querySelector('#guide4 li:nth-child(1)');
    var dotplotscatt = document.querySelector('#guide4 li:nth-child(2)');
    var textlegendscatt = document.querySelector('#guide4 li:nth-child(3)');
    var textlegendscatt2 = document.querySelector('#guide4 li:nth-child(4)');
    var reset = document.querySelector('#guide4 li:nth-child(5)');
  
  
    function addBlurToSelectBoxscatter() {
      var selectBox = iframe4.querySelector('.select-box');
      if (selectBox) {
        selectBox.style.transition = 'box-shadow 0.5s ease';
        selectBox.style.boxShadow = '0 0 15px #3a80d6';
      }
    }
  
  
    function removeBlurFromSelectBoxscatter() {
      var selectBox = iframe4.querySelector('.select-box');
      if (selectBox) {
        selectBox.style.boxShadow = '';
      }
    }
  
    function addShadowToCirclesscatter() {
      var circles = iframe4.querySelectorAll('circle:not(.legend-circle)');
      circles.forEach(circle => {
          circle.style.transition = 'stroke 0.5s, stroke-width 0.5s'; 
          circle.style.stroke = 'rgba(30, 144, 255, 0.5)';
          circle.style.strokeWidth = '15px';
      });
    }
  
  function removeShadowFromCirclesscatter() {
      var circles = iframe4.querySelectorAll('circle:not(.legend-circle)');
      circles.forEach(circle => {
          circle.style.transition = 'stroke 0.5s, stroke-width 0.5s';
          circle.style.stroke = 'transparent'; 
          circle.style.strokeWidth = '1px'; 
      });
  }
  
  
  function addShadowTotextscatter() {
      var texts = iframe4.querySelectorAll('.textLegend');
      texts.forEach(text => {
          text.style.textShadow = `
          3px 3px 5px rgba(30, 144, 255, 0.5), 
          -3px -3px 5px rgba(30, 144, 255, 0.5),
          3px -3px 5px rgba(30, 144, 255, 0.5), 
          -3px 3px 5px rgba(30, 144, 255, 0.5),
          6px 6px 10px rgba(30, 144, 255, 0.5), 
          -6px -6px 10px rgba(30, 144, 255, 0.5),
          6px -6px 10px rgba(30, 144, 255, 0.5), 
          -6px 6px 10px rgba(30, 144, 255, 0.5)
  `;
  
          text.style.transition = 'text-shadow 0.5s ease-in-out';
      });
  }
  
  function removeShadowFromtextscatter() {
      var texts = iframe4.querySelectorAll('.textLegend');
      texts.forEach(text => {
          text.style.textShadow = ''; 
          text.style.transition = 'text-shadow 0.2s ease-in-out';
  
      });
  }
  
  
  function addShadowTorestscatter() {
      var selectBox = iframe4.querySelector('.resetbutton');
      var textt = iframe4.querySelector('.textreset');
      
      if (selectBox  && textt) {
        selectBox.style.boxShadow = '0 0 15px #3a80d6';
        selectBox.style.visibility = 'visible';
        textt.style.visibility = 'visible';
      }
    }
  function removeShadowFromresettscatter() {
  var selectBox = iframe4.querySelector('.resetbutton');
      if (selectBox) {
          selectBox.style.boxShadow = '';
  
      }
  }
  
  
    listcountsc.addEventListener("mouseover", addBlurToSelectBoxscatter);
    listcountsc.addEventListener("mouseout",removeBlurFromSelectBoxscatter);
    dotplotscatt.addEventListener("mouseover", addShadowToCirclesscatter);
    dotplotscatt.addEventListener("mouseout",removeShadowFromCirclesscatter);
    textlegendscatt.addEventListener("mouseover", addShadowTotextscatter);
    textlegendscatt.addEventListener("mouseout",removeShadowFromtextscatter);
    textlegendscatt2.addEventListener("mouseover", addShadowTotextscatter);
    textlegendscatt2.addEventListener("mouseout",removeShadowFromtextscatter);
    reset.addEventListener("mouseover", addShadowTorestscatter);
    reset.addEventListener("mouseout",removeShadowFromresettscatter);
  
});

document.getElementById('lollipop_plot_iframe').addEventListener('load', function() {
    iframe5 = this.contentDocument || this.contentWindow.document;

    var dotslolly = document.querySelector('#guide5 li:nth-child(1)');
    var EUlolli = document.querySelector('#guide5 li:nth-child(2)');
    var TimeTravel = document.querySelector('#guide5 li:nth-child(3)');
  
    function addShadowToCirclelolli() {
      var circles = iframe5.querySelectorAll('circle');
      circles.forEach(circle => {
          circle.style.transition = 'stroke 0.5s, stroke-width 0.5s'; 
          circle.style.stroke = 'rgba(30, 144, 255, 0.5)';
          circle.style.strokeWidth = '15px';
      });
  }
  
  function removeShadowFromCirclelolli() {
      var circles = iframe5.querySelectorAll('circle');
      circles.forEach(circle => {
          circle.style.transition = 'stroke 0.5s, stroke-width 0.5s';
          circle.style.stroke = 'transparent'; 
          circle.style.strokeWidth = '1px'; 
      });
  }
  
  
  function addShadowToCirclelolliEU() {
      var circles = iframe5.querySelectorAll('.EUcircle');
      circles.forEach(circle => {
          circle.style.transition = 'stroke 0.5s, stroke-width 0.5s'; 
          circle.style.stroke = 'rgba(30, 144, 255, 0.5)';
          circle.style.strokeWidth = '15px';
      });
  }
  
  function removeShadowFromCirclelolliEU() {
      var circles = iframe5.querySelectorAll('.EUcircle');
      circles.forEach(circle => {
          circle.style.transition = 'stroke 0.5s, stroke-width 0.5s';
          circle.style.stroke = 'transparent'; 
          circle.style.strokeWidth = '1px'; 
      });
  }
  
  function addBlurToTimetravel() {
      var selectBox = iframe5.querySelector('.time-traveler');
      var crossboxes = iframe5.querySelectorAll('.button');
      if (selectBox ) {
        selectBox.style.transition = 'box-shadow 0.5s ease';
        selectBox.style.boxShadow = '0 0 15px #3a80d6';
        crossboxes.forEach(crossbox => {
          crossbox.style.transition = 'box-shadow 0.5s ease';
          crossbox.style.boxShadow = '0 0 15px #3a80d6';
      })
      }
  
    }
  
  
    function removeBlurToTimetravel() {
      var selectBox = iframe5.querySelector('.time-traveler');
      var crossboxes = iframe5.querySelectorAll('.button');
      if (selectBox) {
          selectBox.style.transition = 'box-shadow 0.5s ease';
        selectBox.style.boxShadow = '';
        crossboxes.forEach(crossbox => {
          crossbox.style.transition = 'box-shadow 0.5s ease';
          crossbox.style.boxShadow = '';
      })
      }
  
    }
  
  dotslolly.addEventListener("mouseover", addShadowToCirclelolli);
  dotslolly.addEventListener("mouseout",removeShadowFromCirclelolli);
  EUlolli.addEventListener("mouseover", addShadowToCirclelolliEU);
  EUlolli.addEventListener("mouseout",removeShadowFromCirclelolliEU);
  TimeTravel.addEventListener("mouseover", addBlurToTimetravel);
  TimeTravel.addEventListener("mouseout", removeBlurToTimetravel);
});

