# Fonctions simulées

## Définition

Les fonctions simulées permettent de **tester les liens** entre le code en effaçant l'implémentation réelle d'une fonction:
- en capturant les appels à la fonction (et les paramètres passés dans ces appels), 
- en capturant les instances des fonctions constructrices lorsqu'elles sont instanciées avec new
- en permettant la configuration des valeurs de retour au moment du test.

### Deux façons de simuler les fonctions

- soit en créant une fonction simulée à utiliser dans le code de test 
- soit en écrivant une simulation manuelle pour remplacer une dépendance du module.