//Listing 2-1, Variables with unclear context

function printGuestStatistics(candidate: string, count: number): void {
    let number: string;
    let verb: string;
    let pluralModifier: string;

    if(count === 0) {
        number = 'no';
        verb = 'are'
        pluralModifier = 's'
    } else if(count === 1) {
        number = '1'
        verb = 'is'
        pluralModifier = ''
    } else {
        number = count.toString()
        verb = 'are'
        pluralModifier = 's'
    }

    const guessMessage: string = `There are ${verb} ${number} ${candidate}${pluralModifier}`;
    console.log(guessMessage);
}

/**
 * 2-1 is made better by creating functions that abstract the "busy work". Ie, deciding number, verb, and pluralModifier
 */
class GuessStatisticsMessage {
    private number: string;
    private verb: string;
    private pluralModifier: string;

    public make(candidate: string, count: number): string {
        this.createPluralDependentMessageParts(count);
        return `There are ${this.verb} ${this.number} ${candidate}${this.pluralModifier}`;
    }

    // Now we don't need be bogged down by the code that's setting the class variables. 
    private createPluralDependentMessageParts(count: number): void {
        if (count === 0) {
            this.thereAreNoLetters();
        } else if (count === 1) {
            this.thereIsOneLetter();
        } else {
            this.thereAreManyLetters(count);
        }
    }

    private thereAreManyLetters(count: number): void {
        this.number = count.toString();
        this.verb = 'are';
        this.pluralModifier = 's';
    }

    private thereIsOneLetter(): void {
        this.number = '1'
        this.verb = 'is';
        this.pluralModifier = '';
    }

    private thereAreNoLetters(): void {
        this.number = 'no'
        this.verb = 'are';
        this.pluralModifier = 's';
    }
}
/**
 * This is something that I see/do in angular templates. 
* For instance, maybe we're displaying multiple customer names, but we only want to display the primary customer and
* put something like `Ken Customer, and 1 more`
* A pipe would be a perfect application for this. 
 */
export class CustomerNamesPipe {
    public transform(customers: any[]): string {
        const primaryCustomer = `${customers[0].name}`;
        if (customers.length === 1) {
            return primaryCustomer;
        }
        return `${primaryCustomer}, and +${customers.length-1} more`;
    }
  }