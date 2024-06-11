package com.example.test.domain.user;

import org.apache.ibatis.annotations.Mapper;

import java.io.IOException;

@Mapper
public interface UserRepository {

    public User findByAuthId(Long authId);
    public User findByUsername(String username);
    public int saveUser(User user) throws Exception;
}
