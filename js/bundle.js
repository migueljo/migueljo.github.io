// Toggle menu
(function() {
  var toggleElm = $('#toggle-menu')[0],
    contNavigation = $('#cont-navigation')[0],
    goToMyInfo = $('#go-to-my-info')[0],
    goToMe = $('#go-to-me')[0],
    goToDescription = $('#go-to-description')[0],
    goToPortfolio = $('#go-to-portfolio')[0],
    goToTecnologies = $('#go-to-tecnologies')[0],
    goToFooter = $('#go-to-footer')[0],
    contMyInfo = $('#my-description')[0],
    goBackToBeginning = $('#go-back-to-beginning')[0],
    mainHeader = $('#main-header')[0],
    portfolio = $('#portfolio')[0],
    tecnologiesSection = $('#tecnologies-section')[0],
    footer = $('#main-footer')[0]

  function goTo(y) {
    $(document.body).animate({ scrollTop: y }, 'ease-in')
  }

  $(toggleElm).on('click', function(evt) {
    $(contNavigation).toggleClass('show-nav')
  })

  $(goToMyInfo).on('click', function(event) {
    var scrollSize = contMyInfo.offsetTop
    goTo(scrollSize)
  })

  $(goToDescription).on('click', function(event) {
    var scrollSize = contMyInfo.offsetTop
    goTo(scrollSize)
  })

  $(goToMe).on('click', function(event) {
    var scrollSize = mainHeader.offsetTop
    goTo(scrollSize)
  })

  $(goToPortfolio).on('click', function(event) {
    var scrollSize = portfolio.offsetTop
    goTo(scrollSize)
  })

  $(goToTecnologies).on('click', function(event) {
    var scrollSize = tecnologiesSection.offsetTop
    goTo(scrollSize)
  })

  $(goToFooter).on('click', function(event) {
    var scrollSize = footer.offsetTop
    goTo(scrollSize)
  })  

  $(goBackToBeginning).on('click', function(event) {
    goTo(0)
  })

})()