# Intro to Databases 1/12/2022

Relational database - columns and row structure
Primary key - column that holds unique identifier, usually numbers

Domaine specific language - RSpec, HTML, SQL
General-purpose language - Ruby, JavaScript


SQL - Structured Query Language, interacts with relational databases

PostgreSQL - object-oriented, open-source

$ postgres --version => 14.1

$ psql - will drop you into the postgres console
\l - will list all the db on your machine
exit - will get you back out

pgAdmin - a PostgreSQL visualization tool

query - making a request to a db and receiving info


Most basic query:
```sql
SELECT * FROM country;
```

Selecting certain columns:
```sql
SELECT name, continent, population FROM country;
```

LIMIT - puts a hard cap on the number of rows:
```sql
SELECT name, continent, population
FROM country
LIMIT 10;
```

WHERE - a conditional statement
```sql
SELECT name, continent, population
FROM country
WHERE continent = 'North America';
```

```sql
SELECT name, continent, population
FROM country
WHERE continent != 'North America';
```

```sql
SELECT name, continent, population
FROM country
WHERE population < 1000000;
```

Exponent notation:
```sql
SELECT name, continent, population
FROM country
WHERE population > 1e6;
```


Logical AND:
```sql
SELECT name, continent, population
FROM country
WHERE population > 1e6
AND continent = 'North America';
```

Logical OR:
```sql
SELECT name, continent, population
FROM country
WHERE population > 1e6
OR continent = 'North America';
```

```sql
LIKE string matching and wild card:
SELECT name, continent, population
FROM country
WHERE continent LIKE '%America';
```

ORDER BY:
```sql
SELECT name, region, indepyear
FROM country
ORDER BY indepyear
LIMIT 1;
```

ORDER BY DESC:
```sql
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 5;
```

Top 5 most populated countries where Queen Elisabeth is the head of state:
```sql
SELECT name, headofstate, population
FROM country
WHERE headofstate LIKE '%Elisabeth%'
ORDER BY population DESC
LIMIT 5;
```
