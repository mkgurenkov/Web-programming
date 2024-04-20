CREATE TABLE users (
    id bigserial PRIMARY KEY,
    login text NOT NULL,
    password_hash text NOT NULL
);

CREATE TABLE point (
    id bigserial PRIMARY KEY,
    x DECIMAL NOT NULL,
    y DECIMAL NOT NULL,
    r DECIMAL NOT NULL
);

CREATE TABLE result (
    id bigserial PRIMARY KEY,
    username text NOT NULL,
    point_id INTEGER UNIQUE REFERENCES point(id),
    hit BOOLEAN NOT NULL,
    execution_time DECIMAL NOT NULL,
    cur_time text NOT NULL
);
