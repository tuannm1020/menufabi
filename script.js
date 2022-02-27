const reports = [...document.querySelectorAll('.report')]
const details = [...document.querySelectorAll('.detail')]
const arrowIcons = [...document.querySelectorAll('.report i')]

let tempReportArr = new Set()
let tempDetailItem

reports.forEach((report, ind) => {
    report.addEventListener('click', () => {
        if (tempReportArr?.has(report)) {
            report.classList.remove('onChoose')
            tempReportArr.delete(report)
        }
        else {
            report.classList.add('onChoose')
            tempReportArr.add(report)
        }
        details[ind].classList.toggle('hide')
        if (!details[ind].classList.contains('hide')) {
            arrowIcons[ind].style.cssText = `transform: rotate(90deg); color: #000;`
            const detailItems = [...details[ind].querySelectorAll('li.detail-item')]
            detailItems.forEach(detailItem => {
                detailItem.addEventListener('click', () => {
                    if (tempDetailItem) tempDetailItem.style.cssText = `
                font-weight: 6400;
                    --color: #eeeeee; 
                `
                    detailItem.style.cssText = `
                    font-weight: 600;
                    color: #0560a6;
                    --color: #0560a6; 
                    `
                    tempDetailItem = detailItem
                })
            })
        } else arrowIcons[ind].style.cssText = `transform: rotate(0); color: #a5a5a5;`
    })
})