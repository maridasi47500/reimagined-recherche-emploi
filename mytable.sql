use userdb;
create table job (
id integer primary key not null AUTO_INCREMENT,
title varchar(355),
date date,
description varchar(355),
entreprise_id integer,
contrat_id integer,
secteur_id integer,
city_id integer 
);
create table entreprise (
id integer primary key not null AUTO_INCREMENT,
name varchar(355)
);
create table secteur (
id integer primary key not null AUTO_INCREMENT,
name varchar(355)
);
create table city (
id integer primary key not null AUTO_INCREMENT,
name varchar(355)
);
create table contrat (
id integer primary key not null AUTO_INCREMENT,
name varchar(355)
);


insert into job (name, date, description, city_id, contrat_id, entreprise_id) values ("Chef de projet IT OPS", "20 octobre 2025", "Poste rattaché au Responsable du département SI Opérations Aériennes, sous la Direction des Systèmes d’information (DSI). Dans le cadre des objectifs fixés par le Responsable de service, le Chef de projet IT a une mission d’interface entre les équipes métiers et la maîtrise d’œuvre chargée de la réalisation technique du projet. Au quotidien, le Chef de projet IT est force de proposition sur les solutions SI et en assure le pilotage transversal. En amont du projet, il aide à définir les besoins, s’assure de l’intégration des outils à l’existant, consigne les spécifications fonctionnelles et rédige le cahier des charges. Tout au long de la conduite du projet, il veille au respect des coûts, des délais et de la qualité. Dans un contexte de modernisation, la DSI recherche un chef de projet IT afin de : ● Conduire des projets de transformation digitale des opérations aériennes (EFB, préparation des vols, e-logbook, planification des équipages et des vols, etc.) ● Répondre aux exigences IT des airbus A350 ● Accompagner le développement de nouveaux services de connectivité à bord ● Structurer et améliorer la performance du SI Opérations Aériennes ● Participer au recensement, à l’analyse et à la consolidation des demandes applicatives ou corrective du système d’information métier ● Recueillir et analyser les besoins des équipes métiers pour de nouveaux projets (SI ou d’organisation) ou des refontes importantes ● Analyser la faisabilité technique des demandes métiers, et veiller à la cohérence des demandes ● Préparer les éléments de chiffrage du coût des projets ● Rédiger les cahiers des charges formalisant les besoins des métiers ● Animer des réunions avec les équipes métiers de manière à affiner la demande. ● Analyser les impacts organisationnels ● Réaliser la cartographie des processus ● Assurer l’interface avec la MOE (interne ou prestataires) : suivre l’avancement du projet et répondre aux problèmes rencontrés ● Assurer le planning du projet ● Piloter la recette fonctionnelle (tests utilisateurs) ● Coordonner le déploiement du projet (suivi de la mise en ligne et remontée des incidents ou dysfonctionnements) ● Assurer le suivi des corrections des incidents selon leur nature ● Assurer une veille technologique", 1, 1, 1);

insert into city (name) values ('Orly');
insert into contrat (name) values ('CDI');
insert into entreprise (name) values ('Air Caraïbes');



