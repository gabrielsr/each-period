import test from 'ava'
import { each } from '../src/EachPeriod'


/**
 * Library under test
 */

// import { eachPeriod } from '../src/each-period'

test.todo("test each('month').inYear(2009).formatAs('MMM/YY')")


test('fn() returns foo', t => {
    const obj = each(1, 'month')
        .inYear(2010)
        .locale('pt-BR')
        .asStringList('MMM/YY', true)
    
    t.log(obj);

    t.deepEqual(obj, 
        ['JAN/10', 'FEV/10', 'MAR/10',
            'ABR/10', 'MAI/10','JUN/10',
            'JUL/10', 'AGO/10', 'SET/10',
            'OUT/10', 'NOV/10', 'DEZ/10'])


})


// TODO: write tests
