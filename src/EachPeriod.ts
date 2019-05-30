import moment, { DurationInputArg1, DurationInputArg2 } from 'moment'
import 'moment/locale/pt-br'

// Ex:
// each('month').inYear(2009).fromTheBegining().formatAs('MMM/YY')
// each('month').thisYear().formatAs('MMM/YY')
// each('month').nextYear().formatAs('MMM/YY')
// each('querter').thisYear().formatAs('MMM/YY', 'MMM/YY', { prefix: 'TRI' })

export default class EachPeriodFluid {
    private period = {
        from:moment(),
        to:moment()
    }

    private slot: string = 'month'

    private incFnc = () => {}

    public each(amount?: DurationInputArg1, unit?: DurationInputArg2): EachPeriodFluid{
        this.incFnc = () => this.period.from.add(amount, unit)
        this.period.from.set('day', 1)
        this.period.to.set('day', 31)
        return this
    }
    public fromNowUntil(amount?: DurationInputArg1, unit?: DurationInputArg2): EachPeriodFluid {
        this.period.to.add(amount, unit)
        return this
    }

    public inYear(year: number): EachPeriodFluid {
        this.period = {
            from: moment(`${year}-01-01`),
            to: moment(`${year}-12-31`),
        }
        return this
    }

    public shiftYear(amount?: DurationInputArg1): EachPeriodFluid {
        this.thisYear()
        this.period.from.add(amount, 'year')
        this.period.to.add(amount, 'year')
        return this
    }

    public thisYear(): EachPeriodFluid {
        this.period.from.set('month', 0)
        this.period.to.set('month', 11)
        return this
    }

    public fromTheBegining(): EachPeriodFluid {
        this.period.from.set('month', 0)
        return this
    }

    public asStringList(format: string, upperCase: boolean = false): string[] {
        let date = this.period.from
        let periods: string[] = []
        console.log(JSON.stringify(this.period))
        while (date.isBefore(this.period.to)) {
            const dateStr = date.format(format)
            periods.push(upperCase ? dateStr.toUpperCase() : dateStr)
            this.incFnc()
        }
        return periods; 
    }

    public locale(language: string): EachPeriodFluid {
        moment.updateLocale(language)
        return this
    }
}

export function each(amount?: DurationInputArg1, unit?: DurationInputArg2): EachPeriodFluid {
    const eachPeriodFluid = new EachPeriodFluid()
    return eachPeriodFluid.each(amount, unit)
}