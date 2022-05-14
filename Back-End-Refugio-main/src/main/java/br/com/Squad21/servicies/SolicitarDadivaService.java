package br.com.Squad21.servicies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.Squad21.entities.SolicitarDadiva;
import br.com.Squad21.repositories.SolicitarDadivaRepository;

@Service
public class SolicitarDadivaService {
	
	
	@Autowired
	private  SolicitarDadivaRepository repository;

	@Transactional(readOnly = true)
	public List<SolicitarDadiva> findAll() {
		List<SolicitarDadiva> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public SolicitarDadiva findById(Long id) {
		Optional<SolicitarDadiva> solicitarDadiva = repository.findById(id);
		return solicitarDadiva.get();
	}

	@Transactional(readOnly = true)
	public void save(SolicitarDadiva solicitarDadiva) {
		repository.save(solicitarDadiva);
	}

	public void delete(Long id) {
		Optional<SolicitarDadiva> solicitarDadiva = repository.findById(id);
		if (solicitarDadiva.isPresent()) {
			repository.delete(solicitarDadiva.get());
		} else {
			System.out.println("Não existe");
		}
	}

	public SolicitarDadiva update(SolicitarDadiva solicitarDadiva) {
		return repository.save(solicitarDadiva);
	}


}
