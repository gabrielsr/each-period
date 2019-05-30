// import moment from 'moment'
// import 'moment/locale/pt-br'


// //each('month').inYear(2009).fromTheBegining().formatAs('MMM/YY')


// export function getYear(yearShift: string | number | void | moment.Duration | moment.FromTo | moment.DurationInputObject | undefined) {
//     let date = moment().locale('pt-BR')
//     date = date.add(yearShift, 'years')
//     date = date.set('month', 0)
//     const start = date.format('MMM/YY').toUpperCase()
//     const end = date
//         .add(11, 'months')
//         .format('MMM/YY')
//         .toUpperCase()

//     return `${start} ${end}`
// }
// function getMonths(shift: number, len: number, startMon: number, step: number, prefix: string | undefined): string[] {
//     let date = moment().locale('pt-BR')
//     const _prefix = prefix ? `${prefix} ` : ''
//     if (startMon) {
//         date = date.set('month', startMon - 1)
//     }
//     date = date.add(shift, 'month')
//     const _step = step || 1

//     let periods = []
//     for (let i = 0; i < len; i++) {
//         const mon = date.format('MMM').toUpperCase()
//         const year = date.locale('pt').format('YY')
//         periods.push(`${_prefix}${mon}/${year}`)
//         date.add(_step, 'month')
//     }
//     return periods
// }
// export function getPeriods(len: number, startMon: number, step: number, prefix: string): string[] {
//     const _prefix = prefix ? `${prefix} ` : ''
//     let statMonths = getMonths(0, len, startMon, step, '')
//     let endMonths = getMonths(step - 1, len, startMon, 1, '')
//     const periods = []
//     for (let i = 0; i < len; i++) {
//         periods.push(`${_prefix} ${statMonths[i]} ${endMonths[i]}`)
//     }
//     return periods
// }

// export function getNextRound(currMonth: number, step: number): number {
//     const roundShift =
//         (currMonth - 1) % step === 0 ? 0 : step - (currMonth - 1) % step
//     return currMonth + roundShift
// }

// export function getRoundPeriods(shift: number, len: number, step: number, prefix: string): string[] {
//     const currMonth = moment().get('month') + shift + 1
//     const startMon = getNextRound(currMonth, step)
//     return getPeriods(len, startMon, step, prefix)
// }


// export function genPeriodOptions() {
//     return [
//         ...getMonths(-1, 12, 0, 1, 'MEN'),
//         ...getRoundPeriods(-1, 4, 3, 'TRI'),
//         ...getRoundPeriods(-1, 2, 6, 'SEM')
//     ]
// }