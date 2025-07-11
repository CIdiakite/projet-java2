// Fonctions de manipulation de chaînes

// 1. Inverser une chaîne
function inverserChaine(chaine) {
  return chaine.split('').reverse().join('');
}

// 2. Compter les caractères
function compterCaracteres(chaine) {
  return chaine.length;
}

// 3. Mettre la première lettre de chaque mot en majuscule
function majusculePremiereLettre(phrase) {
  return phrase
    .split(' ')
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(' ');
}


// Fonctions de tableau

// 4. Trouver le maximum dans un tableau
function trouverMaximum(tableau) {
  return Math.max(...tableau);
}

// 5. Trouver le minimum dans un tableau
function trouverMinimum(tableau) {
  return Math.min(...tableau);
}

// 6. Somme des éléments d'un tableau
function sommeTableau(tableau) {
  return tableau.reduce((acc, val) => acc + val, 0);
}

// 7. Filtrer un tableau selon une condition (callback)
function filtrerTableau(tableau, condition) {
  return tableau.filter(condition);
}


// Fonctions mathématiques

// 8. Calculer la factorielle
function factorielle(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 9. Vérifier si un nombre est premier
function estPremier(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// 10. Générer la suite de Fibonacci jusqu'à un nombre donné de termes
function suiteFibonacci(termes) {
  if (termes <= 0) return [];
  if (termes === 1) return [0];
  const fib = [0, 1];
  while (fib.length < termes) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}
