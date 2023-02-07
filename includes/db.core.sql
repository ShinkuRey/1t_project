create table chgk_game (
    game_id int(11) auto_increment Primary key not null,
    question_id int(11) auto_increment,
    user_id int(11) not null,
    user_name varchar(20) not null,
    question_text varchar(1114) not null,
    answer_text varchar(255) not null
);  