import countBy from './countBy.js';

type ValueTransition = Transition & { value: number };

function filterTransition(
   transition: Transition,
): transition is ValueTransition {
   return transition.value !== null;
}

export default class Statistic {
   private transition;
   total;
   payment;
   status;
   dayWeek;
   dayBest;

   constructor(transition: Transition[]) {
      this.transition = transition;
      this.total = this.setTransitionTotal();
      this.payment = this.setFormPayment();
      this.status = this.setStatusPayment();
      this.dayWeek = this.setWeekBest();
      this.dayBest = this.setDayBest();
   }

   private setTransitionTotal() {
      return this.transition.filter(filterTransition).reduce((acc, index) => {
         return acc + index.value;
      }, 0);
   }

   private setFormPayment() {
      return countBy(this.transition.map(({ formPaiment }) => formPaiment));
   }

   private setStatusPayment() {
      return countBy(this.transition.map(({ status }) => status));
   }

   private setWeekBest() {
      const week = {
         domingo: 0,
         segunda: 0,
         terca: 0,
         quarta: 0,
         quinta: 0,
         sexta: 0,
         sabado: 0,
      };

      for (let i = 0; i < this.transition.length; i++) {
         const day = this.transition[i].date.getDay();

         if (day === 0) week.domingo += 1;
         if (day === 1) week.segunda += 1;
         if (day === 2) week.terca += 1;
         if (day === 3) week.quarta += 1;
         if (day === 4) week.quinta += 1;
         if (day === 5) week.sexta += 1;
         if (day === 6) week.sabado += 1;
      }

      return week;
   }

   private setDayBest() {
      return Object.entries(this.dayWeek).sort((a, b) => {
         return b[1] - a[1];
      })[0];
   }
}
