const numbers = [10, 20, 30, 80, 100];
const values = [10, '20', 30, 'R$ 80', 100];

function showValues(data: number[]) {
   return data.filter((n) => n > 30);
}

function returnValues(data: (string | number)[]) {
   return data.filter((d) => typeof d === 'string');
}

// Exercise
const content = document.querySelector('main');

interface Course {
   nome: string;
   horas: number;
   aulas: number;
   gratuito: boolean;
   tags: [];
   idAulas: [];
   nivel: string;
}

async function courses() {
   const res = await fetch('https://api.origamid.dev/json/cursos.json');
   const data = await res.json();
   showCourses(data);
}

courses();

function showCourses(data: Course[]) {
   data.forEach((item) => {
      let color;
      if (item.nivel === 'iniciante') {
         color = 'blue';
      } else {
         color = 'red';
      }

      if (content)
         content.innerHTML += `
         <h2 style = 'color: ${color}'>Curso: ${item.nome}</h2>
         <p>Horas: ${item.horas}</p>
         <p>Aulas: ${item.aulas}</p>
         <p>Gratuito: ${item.gratuito ? 'Sim' : 'Não'}</p>
         <p>Tags: ${item.tags.join(', ')}</p>
         <p>Aulas: ${item.idAulas.join(' | ')} (Total aulas: ${
            item.idAulas.length
         })</p>
         <p>Nivel: ${item.nivel}</p>
      `;
   });
}
