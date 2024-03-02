package LabAppointmentSystem.LabAppointmentSystem.service;

import LabAppointmentSystem.LabAppointmentSystem.DTO.ScheduleDTO;
import LabAppointmentSystem.LabAppointmentSystem.entity.Schedule;
import LabAppointmentSystem.LabAppointmentSystem.repositories.ScheduleRepo;
import LabAppointmentSystem.LabAppointmentSystem.util.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ScheduleService {
    @Autowired
    private ScheduleRepo scheduleRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String saveSchedule(ScheduleDTO scheduleDTO){
        if (scheduleRepo.existsById(scheduleDTO.getId())){
            return VarList.RSP_DUPLICATED;
        }else {
            scheduleRepo.save(modelMapper.map(scheduleDTO, Schedule.class));
            return VarList.RSP_SUCCESS;
        }
    }
    public List<ScheduleDTO> getAllSchedule(){
        List<Schedule> ScheduleList = scheduleRepo.findAll();
        return modelMapper.map(ScheduleList,new TypeToken<ArrayList<ScheduleDTO>>(){
        }.getType());
    }

    public ScheduleDTO searchSchedule(int id ){
        if (scheduleRepo.existsById(id)){
            Schedule schedule =scheduleRepo.findById(id).orElse(null);
            return modelMapper.map(schedule, ScheduleDTO.class);
        }else {
            return null;
        }
    }
    public ScheduleDTO searchSchedule2(String name ){
        Optional<Schedule> scheduleOptional = scheduleRepo.findByName(name);

        if (scheduleOptional.isPresent()) {
            Schedule schedule = scheduleOptional.get();
            return modelMapper.map(schedule, ScheduleDTO.class);
        } else {
            return null;
        }
    }

    public ScheduleDTO searchSchedule3(String category ){
        Optional<Schedule> scheduleOptional = scheduleRepo.findBycategory(category);

        if (scheduleOptional.isPresent()) {
            Schedule schedule = scheduleOptional.get();
            return modelMapper.map(schedule, ScheduleDTO.class);
        } else {
            return null;
        }
    }

    public String deleteSchedule(int id){
        if (scheduleRepo.existsById(id)){
            scheduleRepo.deleteById(id);
            return VarList.RSP_SUCCESS;
        }else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    public String updateSchedule(ScheduleDTO scheduleDTO){
        if (scheduleRepo.existsById(scheduleDTO.getId())){
            scheduleRepo.save(modelMapper.map(scheduleDTO, Schedule.class));
            return VarList.RSP_SUCCESS;

        }else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }


}


