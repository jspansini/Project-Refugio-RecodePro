package br.com.Squad21.servicies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.Squad21.entities.AtenderDadiva;
import br.com.Squad21.repositories.AtenderDadivaRepository;

@Service
public class AtenderDadivaService {
	
	@Autowired
	private  AtenderDadivaRepository repository;

	@Transactional(readOnly = true)
	public List<AtenderDadiva> findAll() {
		List<AtenderDadiva> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public AtenderDadiva findById(Long id) {
		Optional<AtenderDadiva> atenderDadiva = repository.findById(id);
		return atenderDadiva.get();
	}

	@Transactional(readOnly = true)
	public void save(AtenderDadiva atenderDadiva) {
		repository.save(atenderDadiva);
	}

	public void delete(Long id) {
		Optional<AtenderDadiva> atenderDadiva = repository.findById(id);
		if (atenderDadiva.isPresent()) {
			repository.delete(atenderDadiva.get());
		} else {
			System.out.println("Não existe");
		}
	}

	public AtenderDadiva update(AtenderDadiva atenderDadiva) {
		return repository.save(atenderDadiva);
	}

}
