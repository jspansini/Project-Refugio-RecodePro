package br.com.Squad21.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.Squad21.entities.CriarDadiva;


@Repository
public interface CriarDadivaRepository  extends JpaRepository<CriarDadiva, Long>{

}
