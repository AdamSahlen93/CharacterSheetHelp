startUpProgress()

function startUpProgress() {
  document.getElementById("showMastermind").style.display = "block"
  document.getElementById("hideMastermind").style.display = "none"
  document.getElementById("moreMastermind").style.display = "none"
  document.getElementById("showPortfolio").style.display = "block"
  document.getElementById("hidePortfolio").style.display = "none"
  document.getElementById("morePortfolio").style.display = "none"
  document.getElementById("showDiact").style.display = "block"
  document.getElementById("hideDiact").style.display = "none"
  document.getElementById("moreDiact").style.display = "none"
}
function showMoreMastermind() {
    document.getElementById("moreMastermind").style.display="block"
    document.getElementById("showMastermind").style.display="none"
    document.getElementById("hideMastermind").style.display="block"
}

function hideMoreMastermind() {
    document.getElementById("moreMastermind").style.display="none"
    document.getElementById("showMastermind").style.display="block"
    document.getElementById("hideMastermind").style.display="none"
}

function showMorePortfolio() {
    document.getElementById("morePortfolio").style.display="block"
    document.getElementById("showPortfolio").style.display="none"
    document.getElementById("hidePortfolio").style.display="block"
}

function hideMorePortfolio() {
    document.getElementById("morePortfolio").style.display="none"
    document.getElementById("showPortfolio").style.display="block"
    document.getElementById("hidePortfolio").style.display="none"

}

function showMoreDiact() {
    document.getElementById("moreDiact").style.display="block"
    document.getElementById("showDiact").style.display="none"
    document.getElementById("hideDiact").style.display="block"
}

function hideMoreDiact() {
    document.getElementById("moreDiact").style.display="none"
    document.getElementById("showDiact").style.display="block"
    document.getElementById("hideDiact").style.display="none"

}