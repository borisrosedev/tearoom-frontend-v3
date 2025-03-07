### **Tout savoir sur les expressions régulières (Regex)**

Les **expressions régulières** (ou regex) sont des motifs utilisés pour rechercher, extraire ou remplacer des chaînes de caractères selon un schéma précis. Elles sont utilisées dans plusieurs langages de programmation comme **Python, JavaScript, Java, PHP, Perl, etc.** pour le filtrage et la validation des données.

---

## **Syntaxe et éléments clés d'une expression régulière**
Les expressions régulières sont constituées de **méta-caractères** et de **quantificateurs** qui permettent de spécifier des modèles complexes.

| **Caractère** | **Signification** |
|--------------|------------------|
| `.` | N'importe quel caractère sauf nouvelle ligne |
| `^` | Début d'une ligne |
| `$` | Fin d'une ligne |
| `\d` | Un chiffre `[0-9]` |
| `\D` | Un caractère qui n'est pas un chiffre |
| `\w` | Un caractère alphanumérique `[a-zA-Z0-9_]` |
| `\W` | Un caractère non alphanumérique |
| `\s` | Un espace blanc |
| `\S` | Un caractère qui n'est pas un espace blanc |
| `[...]` | Un ensemble de caractères possibles |
| `[^...]` | Un ensemble de caractères interdits |
| `|` | OU logique (alternance entre motifs) |

### **Quantificateurs**
| **Quantificateur** | **Signification** |
|-------------------|------------------|
| `*` | 0 ou plusieurs occurrences |
| `+` | 1 ou plusieurs occurrences |
| `?` | 0 ou 1 occurrence |
| `{n}` | Exactement `n` occurrences |
| `{n,}` | Au moins `n` occurrences |
| `{n,m}` | Entre `n` et `m` occurrences |

---

## **Comment exiger au moins une majuscule, un chiffre et un symbole ?**

Pour valider une chaîne qui **contient** :
- **au moins une lettre majuscule** (`[A-Z]`)
- **au moins un chiffre** (`\d`)
- **au moins un symbole** (`[^a-zA-Z0-9]`)
- **et une longueur minimale de 8 caractères**

On peut utiliser l'expression régulière suivante :

```
^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$
```

### **Explication de l'expression**
1. `^` → Début de la chaîne.
2. `(?=.*[A-Z])` → **Au moins une lettre majuscule**.
3. `(?=.*\d)` → **Au moins un chiffre** (`\d` = [0-9]).
4. `(?=.*[^a-zA-Z0-9])` → **Au moins un caractère spécial** (qui n'est pas une lettre ou un chiffre).
5. `.{8,}` → **Au moins 8 caractères au total** (`.` = n'importe quel caractère).
6. `$` → Fin de la chaîne.

---




## **Applications des Regex**
1. **Validation des mots de passe** ✅
2. **Filtrage des emails (`^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$`)** 📧
3. **Remplacement de texte avec `re.sub()`** ✍️
4. **Extraction de données d'un fichier log** 📂
5. **Validation de numéros de téléphone, dates, URL** 📞

---

