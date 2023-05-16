package com.example.bookstore.service;


import com.example.bookstore.constraints.Rol;
import com.example.bookstore.dto.AuthDto;
import com.example.bookstore.model.User;
import com.example.bookstore.repositories.UserRepository;
import com.example.bookstore.services.CartService;
import com.example.bookstore.services.imp.UserServiceImp;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mock;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;
/*


public class UserServiceTest {
    private static final String NAME = "John";
    private static final String NAME_NOT = "Kate";

    private static final String PASSWORD = "1234";
    private static final String PASSWORD_NOT = "blabalabala";

    private UserServiceImp userServiceImp;

    @Mock
    private UserRepository userRepository;
    private CartService cartService;

    private User user;
    private AuthDto authDto;
    private AuthDto authDtoNot;

    @BeforeEach
    void init() {
        initMocks(this);
        user = new User();
        user.setId(3L);
        user.setName(NAME);
        user.setPassword(PASSWORD);
        user.setRol(Rol.CLIENT);

        authDto = new AuthDto();
        authDto.setName(NAME);
        authDto.setPassword(PASSWORD);

        authDtoNot = new AuthDto();
        authDtoNot.setName(NAME_NOT);
        authDtoNot.setPassword(PASSWORD_NOT);

        when(userRepository.findByNameAndPassword(authDto)).thenReturn(user);
    }

    @Test
    void givenExistingUser_whenFindByNameAndPassword_thenFindOne() {
        userServiceImp = new UserServiceImp(userRepository, cartService);

        User user = userServiceImp.findByNameAndPassword(authDto);

        Assertions.assertNotNull(user);
        Assertions.assertEquals(NAME,user.getName());
        Assertions.assertEquals(PASSWORD,user.getPassword());
    }

    @Test
    void givenNonExistingUser_whenFindByNameAndPassword_thenThrowException() {
        when(userRepository.findByNameAndPassword(authDtoNot)).thenReturn(null);

        Exception exception = assertThrows(NullPointerException.class, () -> {
            userServiceImp.findByNameAndPassword(authDtoNot);
        });
    }
}

*/
