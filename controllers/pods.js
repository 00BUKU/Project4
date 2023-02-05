
import Pod from "../models/pod.js";



const createPod = async (req, res) => {
  try {
  const pod = new Pod({ ...req.body });
  await pod.save();
  res.status(201).json({ pod });
  } catch (error) {
  res.status(400).json({ error: error.message });
  }
  };
  
  const getPods = async (req, res) => {
  try {
  const pods = await Pod.find({});
  res.json({ pods });
  } catch (error) {
  res.status(400).json({ error: error.message });
  }
  };
  
  const deletePod = async (req, res) => {
  try {
  const pod = await Pod.findOneAndDelete({ _id: req.params.id });
  if (!pod) return res.status(401).json({ error: 'pod not found' });
  res.json({ message: 'Pod successfully cancelled', pod });
  } catch (error) {
  res.status(400).json({ error: error.message });
  }
  };
  
  const getPodById = async (req, res) => {
    try {
    const pod = await Pod.findById(req.params.id);
    if (!pod) return res.status(404).json({ error: 'Pod not found' });
    res.json({ pod });
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
    };
    
    export default {
    createPod,
    getPods,
    deletePod,
    getPodById
    };
    
    
    
    
    