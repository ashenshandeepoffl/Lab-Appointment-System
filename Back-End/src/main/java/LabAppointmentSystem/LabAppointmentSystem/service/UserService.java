package LabAppointmentSystem.LabAppointmentSystem.service;

import LabAppointmentSystem.LabAppointmentSystem.DAO.UsersDAO;
import LabAppointmentSystem.LabAppointmentSystem.DTO.TokenDTO;
import LabAppointmentSystem.LabAppointmentSystem.DTO.UsersDTO;
import LabAppointmentSystem.LabAppointmentSystem.DTO.requestDTO.RegistrationOrLoginAdminsDTO;
import LabAppointmentSystem.LabAppointmentSystem.entity.Users;
import LabAppointmentSystem.LabAppointmentSystem.mappers.TokenMapper;
import LabAppointmentSystem.LabAppointmentSystem.mappers.UsersMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {
    private final UsersDAO usersDAO;
    private final UsersMapper usersMapper;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;
    private final TokenMapper tokenMapper;
    private final AuthenticationManager authenticationManager;

    public UserService(UsersDAO usersDAO, UsersMapper usersMapper, PasswordEncoder passwordEncoder, JWTService jwtService, TokenMapper tokenMapper, AuthenticationManager authenticationManager) {
        this.usersDAO = usersDAO;
        this.usersMapper = usersMapper;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.tokenMapper = tokenMapper;
        this.authenticationManager = authenticationManager;
    }


    public TokenDTO createUsers(RegistrationOrLoginAdminsDTO registrationOrLoginAdminsDTO){
        Users admin = usersMapper.dtoToEntityForRegOrLogin(registrationOrLoginAdminsDTO);
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setRole(registrationOrLoginAdminsDTO.role());
        Users createdAdmin = usersDAO.createUsers(admin);
        return  tokenMapper.tokenToDTO(
                jwtService.generateToken(admin),
                createdAdmin.getId(),
                createdAdmin.getfName(),
                createdAdmin.getlName(),
                createdAdmin.getEmail(),
                createdAdmin.getMobileNumber(),
                createdAdmin.getAddress(),
                createdAdmin.getNicNumber(),
                createdAdmin.getRole()
        );
    }

    public List<UsersDTO> getAllAdmins(){
        return usersDAO.getAllUsers().stream().map(usersMapper::EntityToDTO).toList();
    }

    public TokenDTO loginAdmin(RegistrationOrLoginAdminsDTO registrationOrLoginAdminsDTO){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        registrationOrLoginAdminsDTO.email(),
                        registrationOrLoginAdminsDTO.password()
                )
        );
        List<Users> admins = usersDAO.getAllUsersByEmail(registrationOrLoginAdminsDTO.email());
        String token = jwtService.generateToken(admins.get(0));
        return tokenMapper.tokenToDTO(
                token,
                admins.get(0).getId(),
                admins.get(0).getfName(),
                admins.get(0).getlName(),
                admins.get(0).getEmail(),
                admins.get(0).getMobileNumber(),
                admins.get(0).getAddress(),
                admins.get(0).getNicNumber(),
                admins.get(0).getRole()
        );
    }
}
