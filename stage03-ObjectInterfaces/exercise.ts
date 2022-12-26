interface UserData {
   name: string;
   email: string;
   cpf: string;
}

interface Window {
   UserData: any;
}

window.UserData = {};

function isUserData(obj: unknown): obj is UserData {
   if (
      obj &&
      typeof obj === 'object' &&
      ('name' in obj || 'email' in obj || 'cpf' in obj)
   ) {
      return true;
   } else {
      return false;
   }
}

function validJson(str: string) {
   try {
      JSON.parse(str);
   } catch (error) {
      return false;
   }
   return true;
}

function loadLocalStorage() {
   const localUserData = localStorage.getItem('UserData');
   if (localUserData && validJson(localUserData)) {
      const userData = JSON.parse(localUserData);

      if (isUserData(userData)) {
         Object.entries(userData).forEach(([key, value]) => {
            const input = document.getElementById(key);

            if (input instanceof HTMLInputElement) {
               input.value = value;
               window.UserData[key] = value;
            }
         });
      }
   }
}

function handleValidation({ target }: KeyboardEvent) {
   if (target instanceof HTMLInputElement) {
      window.UserData[target.id] = target.value;
      localStorage.setItem('UserData', JSON.stringify(window.UserData));
   }
}

const formUser = document.querySelector<HTMLElement>('#form');

formUser?.addEventListener('keyup', handleValidation);
