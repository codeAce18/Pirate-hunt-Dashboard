import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Modallev } from '@/components/ui/Modallev';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type Level = {
    id: number;
    image: string;
    name: string;
    rewards: string;
    energy: number;
};

const LevelsTable = () => {
    const [levels, setLevels] = useState<Level[]>([]);
    const [editingLevel, setEditingLevel] = useState<Level | null>(null);
    const [newLevel, setNewLevel] = useState<Level | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    // Load levels from localStorage on component mount
    useEffect(() => {
        const savedLevels = localStorage.getItem('levels');
        if (savedLevels) {
            setLevels(JSON.parse(savedLevels));
        }
    }, []);

    // Save levels to localStorage whenever levels state changes
    useEffect(() => {
        if (levels.length > 0) {
            localStorage.setItem('levels', JSON.stringify(levels));
        } else {
            localStorage.removeItem('levels');
        }
    }, [levels]);

    const handleDelete = (id: number) => {
        const updatedLevels = levels.filter(level => level.id !== id);
        setLevels(updatedLevels);
    };

    const handleEdit = (level: Level) => {
        setEditingLevel(level);
        setIsEditMode(true);
        setImagePreview(level.image); // Show current image preview when editing
        setNewLevel(level); // Ensure newLevel is populated with current level
        setIsModalOpen(true);
    };

    const handleAddLevelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newLevel) return;

        if (isEditMode && editingLevel) {
            // Update existing level
            const updatedLevels = levels.map(level =>
                level.id === editingLevel.id ? { ...editingLevel, ...newLevel } : level
            );
            setLevels(updatedLevels);
        } else {
            // Add new level
            const newId = levels.length > 0 ? levels[levels.length - 1].id + 1 : 1;
            const updatedLevels = [...levels, { ...newLevel, id: newId }];
            setLevels(updatedLevels);
        }

        resetModal();
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setImagePreview(result);
                setNewLevel(prev => (prev ? { ...prev, image: result } : null));
            };
            reader.readAsDataURL(file);
        }
    };

    const resetModal = () => {
        setNewLevel(null);
        setEditingLevel(null);
        setImagePreview(null);
        setIsEditMode(false);
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto p-4">
            {/* Shadcn Table */}
            <Table className="bg-gradient-gradient w-full text-center rounded-[15.2px]">
                <TableHeader>
                    <TableRow className="text-white">
                        <TableHead className="text-white">S/N</TableHead>
                        <TableHead className="text-white">Image</TableHead>
                        <TableHead className="text-white">Level Name</TableHead>
                        <TableHead className="text-white">Rewards</TableHead>
                        <TableHead className="text-white">Energy</TableHead>
                        <TableHead className="text-white">Edit</TableHead>
                        <TableHead className="text-white">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {levels.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={7} className='text-white font-semibold'>No levels available. Add a new level to start.</TableCell>
                        </TableRow>
                    ) : (
                        levels.map((level, index) => (
                            <TableRow key={level.id} className="border-b-[0.97px] border-b-[#FFFFFF26] text-white">
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>
                                    <Image src={level.image} alt={level.name} width={50} height={50} className="rounded-full" />
                                </TableCell>
                                <TableCell>{level.name}</TableCell>
                                <TableCell>{level.rewards}</TableCell>
                                <TableCell>{level.energy}</TableCell>
                                <TableCell>
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                        onClick={() => handleEdit(level)}
                                    >
                                        Edit
                                    </button>
                                </TableCell>
                                <TableCell>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                        onClick={() => handleDelete(level.id)}
                                    >
                                        Delete
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>

            {/* Add Button */}
            <div className="mt-4 text-center">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center mx-auto"
                    onClick={() => {
                        setNewLevel({ id: 0, image: '', name: '', rewards: '', energy: 0 });
                        setIsEditMode(false);
                        setIsModalOpen(true);
                    }}
                >
                    <FaPlus className="mr-2" /> Add New Level
                </button>
            </div>

            {/* Modal for Adding/Editing Level */}
            {isModalOpen && (
                <Modallev onClose={resetModal}>
                    <form onSubmit={handleAddLevelSubmit}>
                        <h3 className="font-bold mb-4">{isEditMode ? 'Edit Level' : 'Add New Level'}</h3>
                        <div className="mb-4">
                            <label>Level Name:</label>
                            <input
                                type="text"
                                value={newLevel?.name || ''}
                                onChange={(e) => setNewLevel({ ...newLevel!, name: e.target.value })}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label>Rewards:</label>
                            <input
                                type="text"
                                value={newLevel?.rewards || ''}
                                onChange={(e) => setNewLevel({ ...newLevel!, rewards: e.target.value })}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label>Energy:</label>
                            <input
                                type="number"
                                value={newLevel?.energy || 0}
                                onChange={(e) => setNewLevel({ ...newLevel!, energy: parseInt(e.target.value) })}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label>Image Upload:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="border p-2 w-full"
                            />
                        </div>
                        {imagePreview && (
                            <div className="mb-4">
                                <h4>Image Preview:</h4>
                                <Image width={60} height={60} src={imagePreview} alt="Image Preview" />
                            </div>
                        )}
                        <div className="flex justify-end">
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                {isEditMode ? 'Save Changes' : 'Add Level'}
                            </button>
                        </div>
                    </form>
                </Modallev>
            )}
        </div>
    );
};

export default LevelsTable;
