package br.com.Squad21.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.Squad21.entities.AtenderDadiva;



@Repository
public interface AtenderDadivaRepository  extends JpaRepository<AtenderDadiva, Long> {

}
