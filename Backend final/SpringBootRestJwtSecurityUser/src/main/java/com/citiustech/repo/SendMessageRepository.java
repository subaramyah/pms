package com.citiustech.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.SendMessages;

public interface SendMessageRepository extends JpaRepository<SendMessages, Long> {

}
