CREATE TABLE point (
    id bigserial PRIMARY KEY,
    x DECIMAL NOT NULL,
    y DECIMAL NOT NULL,
    r DECIMAL NOT NULL
);

CREATE TABLE result (
    id bigserial PRIMARY KEY,
    point_id INTEGER UNIQUE REFERENCES point(id),
    hit BOOLEAN NOT NULL,
    execution_time DECIMAL NOT NULL,
    cur_time text NOT NULL
);
