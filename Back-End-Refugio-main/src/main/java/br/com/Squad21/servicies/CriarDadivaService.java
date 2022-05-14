package br.com.Squad21.servicies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.Squad21.entities.CriarDadiva;
import br.com.Squad21.repositories.CriarDadivaRepository;

@Service
public class CriarDadivaService {
	
	
	@Autowired
	private  CriarDadivaRepository repository;

	@Transactional(readOnly = true)
	public List<CriarDadiva> findAll() {
		List<CriarDadiva> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public CriarDadiva findById(Long id) {
		Optional<CriarDadiva> criarDadiva = repository.findById(id);
		return criarDadiva.get();
	}

	@Transactional(readOnly = false)
	public void save(CriarDadiva criarDadiva) {
		repository.save(criarDadiva);
	}

	public void delete(Long id) {
		Optional<CriarDadiva> criarDadiva = repository.findById(id);
		if (criarDadiva.isPresent()) {
			repository.delete(criarDadiva.get());
		} else {
			System.out.println("Não existe");
		}
	}

	public CriarDadiva update(CriarDadiva criarDadiva) {
		return repository.save(criarDadiva);
	}


}
