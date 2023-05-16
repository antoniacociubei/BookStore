package com.example.bookstore.services;

import com.example.bookstore.dto.AuthDto;
import com.example.bookstore.model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {

    User findByEmail(String email);
    User register(String name, String password);
    User logIn(AuthDto authDto);

    User findByNameAndPassword(AuthDto authDto);
    User save (User user);
    List<User> findAll();

    User updateUserEmail(Long id, String email);

    User deleteUser(Long id);
}
