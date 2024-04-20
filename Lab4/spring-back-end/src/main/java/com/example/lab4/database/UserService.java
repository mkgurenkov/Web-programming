package com.example.lab4.database;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public User findByLogin(String login) {
        return userRepository.findByLogin(login);
    }
    public void addUser(User user) {
        userRepository.save(user);
    }
}
